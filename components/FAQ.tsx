"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to roll out tabOS?",
    a: "Most deployments are live in 2–4 weeks from contract signing. Timeline depends on tablet availability and how quickly we receive your final menu, pricing, and photo assets.",
  },
  {
    q: "Do I have to buy the tablets?",
    a: "No. You have three options: buy the hardware outright, supply your own (must meet our minimum specs), or rent the tablets from Neo Mori Tech. All options include access to the tabOS ecosystem.",
  },
  {
    q: "What happens if a tablet stops working?",
    a: "For Options 1 and 3, we cover hardware under a 2-year warranty. If a tablet fails due to battery, screen, or connectivity issues, we ship a fully configured temporary unit immediately and dispatch a technician for replacement.",
  },
  {
    q: "What's covered in the monthly subscription?",
    a: "Ecosystem management (menu updates, secure cloud hosting, software improvements), 24/7 system monitoring, daily remote backups, proactive security maintenance, and Davao-based priority support.",
  },
  {
    q: "Do I need anything special at the venue?",
    a: "Just a strong, stable Wi-Fi connection. tabOS is designed to be lightweight — no servers, no complex infrastructure. We handle the rest.",
  },
  {
    q: "What if my staff resists the change?",
    a: "Our 3-day onsite training is built around real shifts. We work alongside your team until everyone is confident, then continue with remote support after go-live.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section relative bg-gradient-to-b from-white via-ocean-50/30 to-white">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">FAQ</span>
            <h2 className="h2 mt-5">Questions, answered.</h2>
            <p className="lede mt-5">
              The most common things restaurant owners ask before going live.
              Don't see yours? Reach out — we're a quick reply away.
            </p>
            <a href="#contact" className="btn-primary mt-8 inline-flex">
              Ask our team
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
            <ul className="divide-y divide-ink-100 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-brand-50/50 sm:px-8 sm:py-6"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold text-ink-900 sm:text-lg">
                        {f.q}
                      </span>
                      <span
                        className={`inline-flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? "border-transparent bg-brand-gradient text-white shadow-glow"
                            : "border-ink-200 text-ink-500"
                        }`}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className={`transition-transform ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <path
                            d="M12 5v14M5 12h14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden px-6 transition-all duration-300 sm:px-8 ${
                        isOpen
                          ? "grid-rows-[1fr] pb-6 sm:pb-7"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl text-base leading-relaxed text-ink-600">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
