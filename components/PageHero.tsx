export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40">
      <div className="absolute inset-0 -z-10 bg-hero-glow" />
      <div className="absolute inset-0 -z-20 grid-bg opacity-40" />
      <div
        className="glow-orb -z-10"
        style={{
          width: 500,
          height: 500,
          top: -160,
          left: "10%",
          background: "radial-gradient(circle, #2bdcc0 0%, transparent 70%)",
          opacity: 0.4,
        }}
      />
      <div
        className="glow-orb -z-10"
        style={{
          width: 500,
          height: 500,
          top: -120,
          right: "5%",
          background: "radial-gradient(circle, #42c8ff 0%, transparent 70%)",
          opacity: 0.35,
        }}
      />

      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center animate-fadeUp">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h1 mt-5">{title}</h1>
          {description && <p className="lede mx-auto mt-6 max-w-2xl">{description}</p>}
        </div>
      </div>
    </section>
  );
}
