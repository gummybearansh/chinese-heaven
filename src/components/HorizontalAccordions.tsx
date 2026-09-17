"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const accordionData = [
  {
    title: "Heritage",
    subtitle: "Three generations of mastery",
    description: "Founded in 1978 by Master Chef Liang Wei, our kitchen carries forward techniques honed in Guangzhou's most revered establishments. Every dish begins with respect for the ingredient.",
    image: "/pillar-1-heritage.jpg",
    alt: "Master chef teaching traditional techniques",
  },
  {
    title: "Technique",
    subtitle: "Wok hei — the breath of the wok",
    description: "Temperature. Timing. Intuition. The elusive wok hei cannot be measured, only felt. Our chefs command flames at 300°C, sealing essence into every stir-fry within seconds.",
    image: "/pillar-2-technique.jpg",
    alt: "Wok hei flame technique in action",
  },
  {
    title: "Ingredients",
    subtitle: "Sourced at dawn, served at dusk",
    description: "Live seafood from local waters. Heritage pork from trusted farms. Vegetables harvested hours before service. Freshness is not a preference — it is our only standard.",
    image: "/pillar-3-ingredients.jpg",
    alt: "Fresh market ingredients displayed",
  },
];

export default function HorizontalAccordions() {
  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".accordion-panel");

    panels.forEach((panel, i) => {
      gsap.from(panel, {
        scrollTrigger: {
          trigger: panel,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.1,
      });
    });
  }, []);

  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 md:py-40 px-6 overflow-hidden"
      aria-labelledby="accordion-heading"
    >
      <h2
        id="accordion-heading"
        className="sr-only"
      >
        Our Culinary Philosophy
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium tracking-widest uppercase text-muted mb-3">
            The Foundation
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-2xl mx-auto">
            Three Pillars, One Purpose
          </h3>
        </div>

        <div
          className="flex gap-2 overflow-hidden rounded-2xl"
          role="list"
          aria-label="Culinary philosophy pillars"
        >
          {accordionData.map((item, index) => (
            <article
              key={item.title}
              className="accordion-panel group relative flex flex-col min-w-0 overflow-hidden rounded-2xl transition-all duration-700 ease-out cursor-pointer"
              style={{
                width: index === 0 ? "40%" : "30%",
                minWidth: "120px",
              }}
              role="listitem"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  (e.currentTarget as HTMLElement).click();
                }
              }}
              aria-expanded={false}
            >
              <div
                className="absolute inset-0 z-0 opacity-90 transition-opacity duration-700 group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 justify-end text-white">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 w-full sm:max-w-md lg:max-w-lg">
                  <p className="text-xs font-medium tracking-widest uppercase text-white/70 mb-2">
                    {item.subtitle}
                  </p>
                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-white/90 line-clamp-4 sm:line-clamp-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 group-hover:scale-105 group-hover:bg-white/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}