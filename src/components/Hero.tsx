"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight, MapPin } from "@phosphor-icons/react";

export default function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(".hero-title", { y: 40, opacity: 0 }, 0)
      .from(".hero-subtitle", { y: 30, opacity: 0 }, 0.15)
      .from(".hero-cta-group", { y: 30, opacity: 0 }, 0.3);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 z-0 hero-gradient" aria-hidden="true" />

      <div className="absolute inset-0 z-0" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90"
          poster="/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 min-[380px]:px-6 py-16 sm:py-32">
        <div className="text-center">
          <p className="hero-subtitle inline-flex items-center rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-white/70 dark:bg-black/50 text-foreground/70 border border-black/10 dark:border-white/10 backdrop-blur-md mb-5 sm:mb-6 max-w-full">
            Est. 1978 — Cantonese Kitchen
          </p>
          <h1
            id="hero-title"
            className="hero-title font-display max-w-6xl w-full mx-auto text-center font-medium text-foreground leading-[1.02] text-balance"
            style={{
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: "1.02",
              letterSpacing: "-0.01em",
            }}
          >
            Where Cantonese Tradition
            <br className="hidden min-[420px]:block" />
            <span className="block min-[420px]:inline"> <em className="font-normal">Meets Contemporary Craft</em></span>
          </h1>

          <p
            className="hero-subtitle max-w-2xl mx-auto mt-6 sm:mt-8 text-base min-[380px]:text-lg sm:text-xl md:text-2xl font-light text-foreground/70 leading-relaxed text-balance px-1"
          >
            Hand-pulled noodles at dawn. Dim sum folded with intention.
            <br className="hidden sm:block" />
            {" "}Wok hei that carries generations of flavor.
          </p>

          <div className="hero-cta-group flex flex-col min-[420px]:flex-col sm:flex-row items-stretch min-[420px]:items-center sm:items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-xs min-[420px]:max-w-sm sm:max-w-none mx-auto sm:mx-0">
            <a
              href="#reservations"
              className="group relative inline-flex items-center justify-center gap-3 pl-8 pr-2 py-2 text-base font-medium bg-foreground text-background rounded-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible w-full min-[420px]:w-full sm:w-auto"
            >
              <span className="relative z-10 py-2">Reserve a Table</span>
              <span className="relative z-10 w-10 h-10 rounded-full bg-white/15 dark:bg-black/20 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
                <ArrowRight
                  size={18}
                  weight="light"
                  aria-hidden="true"
                />
              </span>
            </a>
            <a
              href="#menu"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium bg-white/80 dark:bg-black/80 text-foreground border border-black/10 dark:border-white/10 rounded-full backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] hover:border-black/20 dark:hover:border-white/20 focus-visible w-full min-[420px]:w-full sm:w-auto"
            >
              <MapPin size={18} weight="light" className="transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:-translate-y-0.5" aria-hidden="true" />
              <span className="relative z-10">Find Us</span>
            </a>
          </div>
        </div>
      </main>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground/40"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}