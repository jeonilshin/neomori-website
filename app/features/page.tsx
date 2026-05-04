import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Sales & order management, menu & staff management, and analytics — every operational lever you need, from one platform.",
};

const subscriptionValue = [
  {
    title: "Ecosystem management",
    desc: "Remote configuration for menu updates, secure cloud hosting, and system-wide software improvements.",
  },
  {
    title: "Active safeguarding",
    desc: "24/7 system monitoring, daily remote backups, and proactive security maintenance to protect transaction data.",
  },
  {
    title: "Davao-based priority support",
    desc: "Direct access to our local technical team with guaranteed resolution for any system-related issues.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title={
          <>
            One platform.{" "}
            <span className="gradient-text">Every operational lever.</span>
          </>
        }
        description="From the dining floor to the back office, tabOS gives you instant visibility and control over the moments that matter."
      />
      <Features />
      <Stats />

      <section className="section relative">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Monthly Subscription</span>
            <h2 className="h2 mt-5">What your subscription covers.</h2>
            <p className="lede mt-5">
              The monthly fee keeps your restaurant at the forefront of digital
              service.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {subscriptionValue.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="card h-full">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink-900">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
