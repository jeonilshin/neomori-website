/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";

const quotes = [
  {
    quote:
      "We turned 18% more tables in our first month with tabOS. Orders go straight to the kitchen — no more chasing waiters with paper slips.",
    name: "Carlo Reyes",
    role: "Owner, Bistro 8.6° · Davao",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "The team handled everything — menu photos, training, install. We went from contract to go-live in three weeks flat.",
    name: "Janine Co",
    role: "GM, Hapag Davao",
    image:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=900&q=80&auto=format&fit=crop",
  },
];

export default function Testimonial() {
  return (
    <section className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Customer Stories</span>
          <h2 className="h2 mt-5">
            Restaurants that switched, and never looked back.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 120}>
            <figure
              className="relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={q.image}
                  alt={q.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-brand-300"
                  >
                    <path
                      d="M7 7h4v4H7c0 2 1 4 3 4v3c-4 0-7-3-7-7V7zm9 0h4v4h-4c0 2 1 4 3 4v3c-4 0-7-3-7-7V7z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <blockquote className="px-8 py-8 sm:px-10 sm:py-10">
                <p className="font-display text-lg leading-relaxed text-ink-900 sm:text-xl">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient font-display text-sm font-semibold text-white">
                    {q.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink-900">
                      {q.name}
                    </span>
                    <span className="block text-ink-500">{q.role}</span>
                  </span>
                </figcaption>
              </blockquote>
            </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
