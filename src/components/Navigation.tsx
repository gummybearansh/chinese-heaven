"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#reservations", label: "Reservations" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 sm:h-14">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground focus-visible rounded-md px-3 py-2"
            aria-label="Chinese Heaven Home"
          >
            <span className="hidden sm:inline">Chinese Heaven</span>
            <span className="sm:hidden">CH</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 focus-visible"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <a
              href="#reservations"
              onClick={(e) => handleSmoothScroll(e, "#reservations")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity focus-visible"
            >
              Reserve
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus-visible"
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out border-t border-border/50 ${scrolled ? "" : "bg-background/95 backdrop-blur-md"} ${isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="block px-4 py-3 text-base font-medium text-foreground/70 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={(e) => handleSmoothScroll(e, "#reservations")}
              className="block px-4 py-3 text-base font-medium text-center bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity mt-4"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}