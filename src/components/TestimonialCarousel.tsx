"use client";

import { useState, useCallback, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CaretLeft, CaretRight, Star, StarHalf } from "@phosphor-icons/react";
import Image from "next/image";

const testimonials = [
  {
    quote: "The har gow here changed my understanding of what a dumpling can be. Seven perfect pleats, shrimp so sweet it tastes like it was swimming an hour ago. This is the standard.",
    author: "M. Chen",
    role: "Food Critic, San Francisco Chronicle",
    avatar: "/testimonial-1-chen.jpg",
    avatarAlt: "M. Chen holding har gow in chopsticks with tasting notebook",
    rating: 5,
  },
  {
    quote: "I've eaten char siu across three continents. Chinese Heaven's version — honey-lacquered Iberico, that caramelized edge — remains the benchmark. The wok hei on their chow fun is equally undeniable.",
    author: "J. Park",
    role: "Chef & Restaurateur",
    avatar: "/testimonial-2-park.jpg",
    avatarAlt: "J. Park in kitchen with arms crossed, wok behind",
    rating: 5,
  },
  {
    quote: "My grandmother brought me here when I was six. Thirty years later, I bring my own daughter. The steamed fish tastes exactly the same — which is the highest compliment a Cantonese restaurant can earn.",
    author: "L. Wong",
    role: "Third-Generation Patron",
    avatar: "/testimonial-3-wong.jpg",
    avatarAlt: "L. Wong at Chinese Heaven table with dim sum and jade bracelet",
    rating: 4.5,
  },
  {
    quote: "The dim sum cart service at dawn is theater of the highest order. Each piece arrives at the precise temperature, the precise texture. No ceremony, just craft. Rare in any cuisine, vanishing in ours.",
    author: "K. Tanaka",
    role: "Culinary Historian",
    avatar: "/testimonial-4-tanaka.jpg",
    avatarAlt: "K. Tanaka in study holding vintage bamboo steamer",
    rating: 5,
  },
];

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div className="flex items-center justify-center gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, i) => (
        <Star key={i} size={18} weight="fill" className="text-amber-500" aria-hidden="true" />
      ))}
      {half && <StarHalf size={18} weight="fill" className="text-amber-500" aria-hidden="true" />}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }).map((_, i) => (
        <Star key={`e-${i}`} size={18} weight="light" className="text-foreground/30" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goToNext, 6000);
    return () => clearInterval(id);
  }, [paused, currentIndex, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      diff > 0 ? goToNext() : goToPrevious();
    }
    setTouchStart(null);
  };

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".testimonial-avatar", {
      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      className="testimonial-section relative flex flex-col justify-center"
      aria-labelledby="testimonial-title"
    >
      <div className="w-full text-center">
        <div className="mb-6">
          <p className="text-sm font-medium tracking-widest uppercase text-muted mb-3">
            Voices
          </p>
          <h2
            id="testimonial-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            What They Remember
          </h2>
        </div>

        <div className="relative w-full">
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              role="list"
              aria-label="Guest testimonials"
            >
              {testimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="testimonial-card w-full flex-shrink-0 px-4 sm:px-6"
                  role="listitem"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative flex-shrink-0">
                      <div
                        className="testimonial-avatar w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border/50 ring-4 ring-foreground/5 bg-background"
                        aria-hidden="true"
                      >
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.avatarAlt}
                          fill
                          className="object-cover"
                          sizes="128px"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <Stars rating={testimonial.rating} />
                    <div className="flex-1">
                      <blockquote className="text-base sm:text-lg font-light leading-relaxed text-foreground/80 mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <footer>
                        <p className="text-lg font-medium text-foreground">{testimonial.author}</p>
                        <p className="text-sm text-muted font-light mt-1">{testimonial.role}</p>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-card border border-border/50 hover:bg-card hover:border-border transition-all duration-300 focus-visible"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={20} weight="bold" className="text-foreground" aria-hidden="true" />
            </button>

            <div
              className="flex gap-2"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-foreground w-6"
                      : "bg-muted/40 hover:bg-muted/60"
                  }`}
                  role="tab"
                  aria-selected={index === currentIndex}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-card border border-border/50 hover:bg-card hover:border-border transition-all duration-300 focus-visible"
              aria-label="Next testimonial"
            >
              <CaretRight size={20} weight="bold" className="text-foreground" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}