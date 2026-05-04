import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "About",
  description:
    "Neo Mori Tech Information Solutions Corp. builds tabOS — a tablet-based digital ordering ecosystem for modern restaurants. Meet the founders.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Modernizing the way restaurants <span className="gradient-text">order, serve, and grow</span>.
          </>
        }
        description="Neo Mori Tech Information Solutions Corp. is a Davao-based technology company building tabOS — a digital ecosystem that bridges every diner, waiter, and kitchen."
      />

      <section className="section relative">
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-ink-100 bg-white p-10 shadow-card lg:grid-cols-3 lg:p-14">
            <Pillar
              title="Our mission"
              body="Eliminate the operational friction of paper, miscommunication, and manual encoding so restaurant teams can focus entirely on hospitality."
            />
            <Pillar
              title="What we build"
              body="tabOS — a tablet-based ordering, menu, and analytics ecosystem deployed across the dining floor and managed remotely from a single dashboard."
            />
            <Pillar
              title="Where we serve"
              body="Headquartered in Davao City, with on-the-ground deployment, training, and 24/7 priority support across the Philippines."
            />
          </div>
        </div>
      </section>

      <Founders />
      <Contact />
    </>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
        {title}
      </div>
      <p className="mt-4 text-base leading-relaxed text-ink-700">{body}</p>
    </div>
  );
}
