"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const signatureDishes = [
  {
    name: "Har Gow",
    description: "Crystal shrimp dumplings. Seven pleats. Wild-caught shrimp, bamboo shoots, ginger. Steamed to translucent perfection.",
    price: "18",
    image: "/dish-1-har-gow.jpg",
    alt: "Crystal har gow lifted by chopsticks over bamboo steamer",
  },
  {
    name: "Char Siu",
    description: "Honey-glazed Iberico pork. Five-spice marinade, 24-hour cure. Caramelized edges, melting interior. Served with house pickles.",
    price: "32",
    image: "/dish-2-char-siu.jpg",
    alt: "Sliced char siu fanned on black plate with pickles",
  },
  {
    name: "Beef Chow Fun",
    description: "Wok-seared wide rice noodles. Prime flank, bean sprouts, chives. Wok hei infused. The definitive test of a Cantonese kitchen.",
    price: "28",
    image: "/dish-3-chow-fun.jpg",
    alt: "Beef chow fun tossed high in wok with flames",
  },
  {
    name: "Steamed Whole Fish",
    description: "Daily catch, ginger-scallion steam. Soy-garlic emulsion. Cilantro, hot oil finish. The soul of Cantonese dining.",
    price: "MP",
    image: "/dish-4-whole-fish.jpg",
    alt: "Whole steamed fish with ginger-scallion and hot oil pour",
  },
];

export default function SignatureDishes() {
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>(".signature-card");

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 88%",
        onEnter: () => {
          gsap.delayedCall(i * 0.08, () => card.classList.add("is-visible"));
        },
        onEnterBack: () => card.classList.add("is-visible"),
      });
    });
  }, []);

  return (
    <section
      id="signature"
      className="relative py-24 sm:py-32 md:py-40 px-6"
      aria-labelledby="signature-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-medium tracking-widest uppercase text-muted mb-4">
            Signature
          </p>
          <h2
            id="signature-title"
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-2xl mx-auto"
          >
            Dishes That Define Us
          </h2>
          <p className="mt-6 text-lg text-muted max-w-xl mx-auto font-light leading-relaxed">
            Four dishes. Decades of refinement. Each one a non-negotiable standard.
          </p>
        </div>

        <div
          className="group/dishes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          role="list"
          aria-label="Signature dishes"
        >
          {signatureDishes.map((dish, index) => (
            <article
              key={dish.name}
              className="signature-card group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-border"
              role="listitem"
              style={{ zIndex: 4 - index }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500">
                  <span className="glass px-3 py-1.5 rounded-full text-xs font-medium text-foreground">
                    Signature
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">
                    {dish.name}
                  </h3>
                  <span className="text-xl font-semibold text-foreground whitespace-nowrap">
                    ${dish.price}
                  </span>
                </div>
                <p className="text-sm font-light text-foreground/70 leading-relaxed line-clamp-3">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#menu"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-medium bg-foreground text-background rounded-full hover:opacity-90 hover:scale-[1.02] transition-all duration-300 focus-visible"
          >
            Explore Full Menu
            <svg
              width="18"
              height="18"
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
          </a>
        </div>
      </div>
    </section>
  );
}