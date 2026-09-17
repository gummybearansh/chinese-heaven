"use client";

import Link from "next/link";
import { InstagramLogo, TwitterLogo, FacebookLogo, MapPin, Phone, Clock } from "@phosphor-icons/react";

const quickLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#signature", label: "Signature" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#reservations", label: "Reserve" },
];

const socialLinks = [
  { icon: InstagramLogo, href: "https://instagram.com/chineseheaven", label: "Instagram" },
  { icon: TwitterLogo, href: "https://twitter.com/chineseheaven", label: "Twitter" },
  { icon: FacebookLogo, href: "https://facebook.com/chineseheaven", label: "Facebook" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative glass border-t border-border/50"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 min-[380px]:px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-foreground focus-visible"
              aria-label="Chinese Heaven Home"
            >
              Chinese Heaven
            </Link>
            <span className="hidden sm:inline text-xs font-light text-foreground/50">
              888 Canton Street, San Francisco
            </span>
          </div>

          <nav aria-label="Footer" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-foreground/70 hover:text-foreground transition-colors duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap">
            <span className="hidden lg:flex items-center gap-1.5 text-xs font-light text-foreground/50">
              <Clock size={14} weight="light" aria-hidden="true" />
              Tue–Sun 10 AM – 10 PM
            </span>
            <a
              href="tel:+14155550188"
              className="hidden lg:flex items-center gap-1.5 text-xs font-light text-foreground/50 hover:text-foreground transition-colors"
            >
              <Phone size={14} weight="light" aria-hidden="true" />
              +1 (415) 555-0188
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0 flex items-center justify-center rounded-full bg-card/80 border border-border/50 text-foreground/60 hover:text-foreground hover:border-border transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] focus-visible"
                aria-label={social.label}
              >
                <social.icon size={16} weight="light" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4 mt-5 border-t border-border/50">
          <p className="text-xs font-light text-foreground/50">
            © {currentYear} Chinese Heaven. All rights reserved.
          </p>
          <p className="text-xs font-light text-foreground/50 flex items-center gap-1.5">
            <MapPin size={12} weight="light" aria-hidden="true" />
            San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
