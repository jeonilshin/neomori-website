"use client";

import { useEffect, useRef, useState } from "react";

export default function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1400,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(to * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {v.toFixed(decimals)}
      {suffix}
    </span>
  );
}
