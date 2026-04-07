"use client";

import { useReveal } from "@/components/ui/useReveal";
import { FEATURES } from "@/config/site.config";

export default function Features() {
  const ref = useReveal();

  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden bg-[#0E0E10]">
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C0392B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#C0392B] mb-4 px-3 py-1 rounded-full border border-[#C0392B]/30 bg-[#C0392B]/10">
            Why StreamVault
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#EDE9E0] mb-4">
            Everything You Need,{" "}
            <span className="text-gradient-unlimited">Nothing You Don't</span>
          </h2>
          <p className="text-[#8C8C9C] text-lg max-w-2xl mx-auto">
            Built from the ground up for the modern viewer. No compromises, no complexity.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <div
              key={feat.title}
              className={`reveal reveal-delay-${Math.min(i + 1, 5)} group glass-card rounded-2xl p-7 cursor-default transition-all duration-300 hover:scale-[1.02] hover:border-[#C0392B]/40`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-all duration-300 group-hover:scale-110"
                   style={{ background: "linear-gradient(135deg, rgba(192,57,43,0.2), rgba(232,160,144,0.1))", border: "1px solid rgba(192,57,43,0.25)" }}>
                {feat.icon}
              </div>

              <h3 className="text-[#EDE9E0] font-bold text-lg mb-2 group-hover:text-gradient transition-all">
                {feat.title}
              </h3>
              <p className="text-[#8C8C9C] text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Bottom glow line */}
              <div className="mt-5 h-px bg-gradient-to-r from-[#C0392B]/0 via-[#C0392B]/50 to-[#C0392B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
