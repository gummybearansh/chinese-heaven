"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const philosophyImages = [
  {
    src: "/philosophy-1-morning-prep.jpg",
    alt: "Chef chopping scallions at 4 AM in narrow Cantonese kitchen with stacked bamboo steamers",
    caption: "Morning prep begins at 4 AM",
  },
  {
    src: "/philosophy-2-pleating.jpg",
    alt: "Har gow pleating sequence showing seven precise folds",
    caption: "Each pleat, a promise of quality",
  },
  {
    src: "/philosophy-3-wok-flames.jpg",
    alt: "Three chefs firing three woks simultaneously with different flames",
    caption: "Where fire meets finesse",
  },
  {
    src: "/philosophy-4-noodle-pull.jpg",
    alt: "Master pulling hand-stretched noodles in morning light with flour dust",
    caption: "Rhythm passed through generations",
  },
  {
    src: "/philosophy-5-plating.png",
    alt: "Steamed whole fish on white oval platter with ginger-scallion and cilantro",
    caption: "Beauty before the first bite",
  },
  {
    src: "/philosophy-6-tea.jpg",
    alt: "Gong fu tea pouring amber liquor into thimble cups",
    caption: "Tea completes the journey",
  },
];

export default function PhilosophySection() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: ".philosophy-section",
        start: "top top",
        end: "bottom bottom",
        pin: ".philosophy-pinned",
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    });

    const refresh = gsap.delayedCall(0.6, () => ScrollTrigger.refresh());

    return () => {
      refresh.kill();
      mm.revert();
    };

    const images = gsap.utils.toArray<HTMLElement>(".philosophy-gallery-item");

    images.forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 0.92, opacity: 0.35 },
        {
          scrollTrigger: {
            trigger: img,
            start: "top 92%",
            end: "top 55%",
            scrub: 1,
          },
          scale: 1,
          opacity: 1,
          ease: "none",
        }
      );
    });
  }, []);

  return (
    <section
      id="philosophy"
      className="philosophy-section relative"
      aria-labelledby="philosophy-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div
            className="philosophy-pinned lg:col-span-5 self-start"
          >
            <div className="space-y-8 pr-8 lg:pr-16 w-full lg:h-[100dvh] lg:flex lg:flex-col lg:justify-center">
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-muted mb-4">
                  Philosophy
                </p>
                <h2
                  id="philosophy-title"
                  className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
                >
                  Cooking Is
                  <br />
                  <span className="text-foreground/60">Remembering</span>
                </h2>
              </div>

              <div className="text-foreground/70 leading-relaxed">
                <p className="text-lg font-light">
                  We do not invent — we remember. Recipes carried from Guangzhou,
                  honored with the same devotion, ingredients, and fire since 1978.
                </p>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-base font-light text-foreground/80 leading-relaxed">
                  No MSG. No frozen shortcuts. <span className="font-medium text-foreground">Only craft.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="grid grid-cols-2 gap-4 lg:gap-6"
              role="list"
              aria-label="Philosophy in practice gallery"
            >
              {philosophyImages.map((item, index) => (
                <article
                  key={index}
                  className="philosophy-gallery-item group relative aspect-[4/5] rounded-2xl overflow-hidden bg-border/50"
                  role="listitem"
                >
                  <div className="absolute inset-0 image-reveal">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white text-sm font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                      {item.caption}
                    </p>
                  </div>
                  <div
                    className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}