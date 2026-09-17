"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const marqueeItems = [
  { name: "Live Maine Lobster", origin: "Casco Bay, harvested dawn daily" },
  { name: "Iberico Pork Collar", origin: "Dehesa de Extremadura, acorn-fed" },
  { name: "Hand-Pulled Noodles", origin: "Made fresh 4 AM, high-gluten flour" },
  { name: "Morning Dim Sum", origin: "Folded to order, bamboo steamed" },
  { name: "12-Year Aged Soy", origin: "Yu Ding Xing, double fermented" },
  { name: "Wok Hei Mastery", origin: "300°C, carbon steel, generations" },
  { name: "Jasmine Pearl Rice", origin: "Single-origin, Thai Hom Mali" },
  { name: "Fermented Bean Curd", origin: "Red yeast rice, 180-day aged" },
  { name: "Live Maine Lobster", origin: "Casco Bay, harvested dawn daily" },
  { name: "Iberico Pork Collar", origin: "Dehesa de Extremadura, acorn-fed" },
  { name: "Hand-Pulled Noodles", origin: "Made fresh 4 AM, high-gluten flour" },
  { name: "Morning Dim Sum", origin: "Folded to order, bamboo steamed" },
  { name: "12-Year Aged Soy", origin: "Yu Ding Xing, double fermented" },
  { name: "Wok Hei Mastery", origin: "300°C, carbon steel, generations" },
  { name: "Jasmine Pearl Rice", origin: "Single-origin, Thai Hom Mali" },
  { name: "Fermented Bean Curd", origin: "Red yeast rice, 180-day aged" },
];

export default function InfiniteMarquee() {
  useGSAP(() => {
    const marquee = document.querySelector(".marquee-track");
    if (!marquee) return;

    const trackWidth = marquee.scrollWidth / 2;
    const duration = trackWidth / 50;

    gsap.to(marquee, {
      x: -trackWidth,
      duration,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      className="relative py-16 px-6 overflow-hidden border-y border-border/50"
      aria-label="Ingredients that define us"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 px-2">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted mb-2">
              Sourced Daily
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Ingredients That Define Us
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-sm text-muted font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>Hover to pause</span>
          </div>
        </div>

        <div className="relative">
          <div
            className="marquee-content flex gap-8 whitespace-nowrap will-change-transform"
            style={{ animationDuration: "30s" }}
            role="list"
            aria-label="Daily sourced ingredients"
            onMouseEnter={(e) => {
              const track = e.currentTarget as HTMLElement;
              track.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              const track = e.currentTarget as HTMLElement;
              track.style.animationPlayState = "running";
            }}
          >
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-1.5 px-6 py-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 shrink-0 min-w-[280px] transition-all duration-300 hover:bg-card hover:border-border/80 hover:shadow-lg"
                role="listitem"
              >
                <span className="text-base font-medium text-foreground whitespace-nowrap">{item.name}</span>
                <span className="text-xs font-light text-muted leading-relaxed max-w-[220px]">{item.origin}</span>
              </div>
            ))}
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}