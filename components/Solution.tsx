/* eslint-disable @next/next/no-img-element */
import Reveal from "./Reveal";

export default function Solution() {
  return (
    <section
      id="solution"
      className="section relative bg-gradient-to-b from-white via-brand-50/40 to-white"
    >
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Solution</span>
          <h2 className="h2 mt-5">
            <span className="gradient-text">tabOS</span> bridges every diner,
            waiter, and kitchen.
          </h2>
          <p className="lede mt-5">
            A specialized digital ordering ecosystem that digitizes the point
            of origin for every order — ensuring data accuracy and real-time
            control across the entire restaurant floor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <ModelCard
              badge="Model 01"
              title="Table-Based Tablet Ordering"
              desc="A dedicated tablet on every table. Guests browse and order independently — autonomy for diners, zero transcription errors for staff."
              bullets={[
                "Customers control the pace of their meal",
                "Eliminates miscommunication entirely",
                "Surfaces upsells and add-ons naturally",
              ]}
              image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80&auto=format&fit=crop"
              imageAlt="Diners using tablet to order"
            />
          </Reveal>
          <Reveal delay={150}>
            <ModelCard
              badge="Model 02"
              title="Waiter-Assisted Tablet Ordering"
              desc="Tablets in the hands of your waiters. Orders are encoded right at the table — no paper slips, no walking back and forth to the cashier."
              bullets={[
                "Faster order-taking and table turnover",
                "Staff PINs track accountability per order",
                "Frees servers to focus on hospitality",
              ]}
              image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&auto=format&fit=crop"
              imageAlt="Waiter taking order on tablet"
              flip
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ModelCard({
  badge,
  title,
  desc,
  bullets,
  image,
  imageAlt,
  flip,
}: {
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  flip?: boolean;
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 ${
            flip
              ? "bg-gradient-to-t from-ocean-900/80 via-ocean-700/30 to-transparent"
              : "bg-gradient-to-t from-brand-900/80 via-brand-700/30 to-transparent"
          }`}
        />
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700 backdrop-blur">
            {badge}
          </span>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="p-8 sm:p-10">
        <p className="text-base leading-relaxed text-ink-600">{desc}</p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-ink-700">
              <Check />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-gradient text-white">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5L20 7"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
