import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfffa",
          100: "#cffdf2",
          200: "#a1f8e6",
          300: "#65eed5",
          400: "#2bdcc0",
          500: "#10c2a8",
          600: "#079c89",
          700: "#0a7c70",
          800: "#0d625b",
          900: "#0e514c",
          950: "#022e2d",
        },
        ocean: {
          50: "#eefcff",
          100: "#d5f6ff",
          200: "#b3edff",
          300: "#7fdfff",
          400: "#42c8ff",
          500: "#1aabf0",
          600: "#0388ce",
          700: "#066ca6",
          800: "#0b5b89",
          900: "#104b71",
          950: "#0a304b",
        },
        ink: {
          50: "#f5f7f8",
          100: "#e7ecee",
          200: "#cfd8dc",
          300: "#aabac1",
          400: "#7d949d",
          500: "#5e7882",
          600: "#4a606a",
          700: "#3d4f57",
          800: "#34434a",
          900: "#0d1b1f",
          950: "#060e10",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #10c2a8 0%, #0388ce 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, #cffdf2 0%, #d5f6ff 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(16,194,168,0.25), rgba(3,136,206,0.05) 60%, transparent 80%)",
      },
      boxShadow: {
        glow: "0 30px 80px -20px rgba(16,194,168,0.45)",
        card: "0 8px 30px -10px rgba(13, 27, 31, 0.18)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        fadeUp: "fadeUp 0.7s ease-out both",
        marquee: "marquee 28s linear infinite",
        gradient: "gradient 8s ease infinite",
        spinSlow: "spinSlow 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
