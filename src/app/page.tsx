import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HorizontalAccordions from "@/components/HorizontalAccordions";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import PhilosophySection from "@/components/PhilosophySection";
import SignatureDishes from "@/components/SignatureDishes";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ReservationsCTA from "@/components/ReservationsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full flex-1">
      <Navigation />

      <Hero />

      <HorizontalAccordions />

      <InfiniteMarquee />

      <PhilosophySection />

      <SignatureDishes />

      <section id="visit" className="relative overflow-hidden" aria-label="Reviews and reservations">
        <div
          className="absolute inset-0 opacity-25"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/reservations-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 sm:py-16 grid gap-10 lg:grid-cols-2 lg:gap-0 items-center min-h-[100dvh] lg:divide-x lg:divide-border/50">
          <div className="lg:pr-12">
            <TestimonialCarousel />
          </div>

          <div className="lg:pl-12">
            <ReservationsCTA />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}