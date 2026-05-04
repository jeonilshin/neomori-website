import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import Warranty from "@/components/Warranty";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Three flexible investment options for tabOS — outright purchase, client-supplied hardware, or rental. All include onboarding and 2-year hardware warranty (where applicable).",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Options"
        title={
          <>
            Three flexible ways to{" "}
            <span className="gradient-text">roll out tabOS</span>.
          </>
        }
        description="Pricing scales with the number of tablet units required. Each option includes a one-time onboarding fee covering full setup, menu digitization, and 3-day onsite training."
      />
      <Pricing />
      <Warranty />
      <FAQ />
      <Contact />
    </>
  );
}
