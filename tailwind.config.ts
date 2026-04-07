import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#C0392B",
          primaryLight: "#E8A090",
          secondary: "#8B1A1A",
          accent: "#E8A090",
        },
        surface: {
          deep: "#0E0E10",
          card: "#181820",
          cardHover: "#1f1f28",
          glass: "rgba(255,255,255,0.04)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0E0E10 0%, #1a0e0e 50%, #0E0E10 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(139,26,26,0.12), rgba(192,57,43,0.06))",
        "cta-gradient": "linear-gradient(135deg, #C0392B, #E8A090)",
        "text-gradient": "linear-gradient(90deg, #C0392B, #E8A090)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "scroll": "scroll 40s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(192,57,43,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(192,57,43,0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(192,57,43,0.3)",
        "glow-lg": "0 0 60px rgba(192,57,43,0.4)",
        "glow-cyan": "0 0 30px rgba(232,160,144,0.3)",
        card: "0 4px 40px rgba(0,0,0,0.6)",
        "card-hover": "0 8px 60px rgba(192,57,43,0.25)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
