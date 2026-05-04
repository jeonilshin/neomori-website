"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[36px] bg-brand-gradient p-1 shadow-glow">
          <div className="relative grid gap-10 rounded-[32px] bg-ink-900 p-10 text-white lg:grid-cols-12 lg:p-16">
            <div
              className="glow-orb"
              style={{
                width: 380,
                height: 380,
                top: -100,
                right: -100,
                background:
                  "radial-gradient(circle, #2bdcc0 0%, transparent 70%)",
                opacity: 0.3,
              }}
            />
            <div
              className="glow-orb"
              style={{
                width: 380,
                height: 380,
                bottom: -120,
                left: -100,
                background:
                  "radial-gradient(circle, #42c8ff 0%, transparent 70%)",
                opacity: 0.25,
              }}
            />

            <div className="relative lg:col-span-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
                Book a demo
              </span>
              <h2 className="font-display mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                See tabOS running in your restaurant.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Tell us about your operation and our Davao-based team will set
                up a tailored walkthrough — including pricing for your specific
                tablet count.
              </p>
              <div className="mt-10 space-y-4 text-sm">
                <ContactRow
                  label="Email"
                  value="test@neomoritech.com"
                  href="mailto:test@neomoritech.com"
                />
                <ContactRow
                  label="Headquarters"
                  value="Davao City, Philippines"
                />
                <ContactRow
                  label="Operating hours"
                  value="Mon – Sat · 9AM – 6PM PHT"
                />
              </div>
            </div>

            <div className="relative lg:col-span-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8"
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12l5 5L20 7"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <h3 className="font-display mt-5 text-xl font-semibold">
                      Thanks — we'll be in touch.
                    </h3>
                    <p className="mt-2 text-sm text-white/75">
                      Our team will reach out within one business day.
                    </p>
                  </div>
                ) : (
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Restaurant name" name="restaurant" />
                    <Field label="Your name" name="name" />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      required
                    />
                    <Field label="Phone" name="phone" type="tel" />
                    <Field
                      label="Number of tablets needed"
                      name="tablets"
                      type="number"
                      placeholder="e.g. 12"
                      span
                    />
                    <div className="sm:col-span-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-white/70">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your operation."
                        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
                      />
                    </div>
                    <button
                      type="submit"
                      className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 transition-transform hover:-translate-y-0.5 hover:bg-brand-50"
                    >
                      Request a demo
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14m0 0l-6-6m6 6l-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  span,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  span?: boolean;
}) {
  return (
    <div className={span ? "sm:col-span-2" : ""}>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wider text-white/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-300 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
      />
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="w-28 flex-none text-xs font-semibold uppercase tracking-wider text-white/60">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          className="text-base text-white transition-colors hover:text-brand-200"
        >
          {value}
        </a>
      ) : (
        <span className="text-base text-white">{value}</span>
      )}
    </div>
  );
}
