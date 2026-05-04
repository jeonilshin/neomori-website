import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Showcase from "@/components/Showcase";
import Hardware from "@/components/Hardware";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Solution",
  description:
    "tabOS is a tablet-based digital ordering ecosystem. Two implementation models — table-based and waiter-assisted — built for the realities of busy restaurants.",
};

export default function SolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Solution"
        title={
          <>
            <span className="gradient-text">tabOS</span> bridges every diner,
            waiter, and kitchen.
          </>
        }
        description="A specialized digital ordering ecosystem that digitizes the point of origin for every order — ensuring data accuracy and real-time control across the entire restaurant floor."
      />
      <Problem />
      <Solution />
      <Showcase />
      <Hardware />
      <Contact />
    </>
  );
}
