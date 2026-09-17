"use client";

import { useState } from "react";
import { Calendar, Check, Clock, MapPin, Phone, Mailbox } from "@phosphor-icons/react";

const reservationInfo = [
  { icon: Calendar, label: "Dinner Service", value: "Tue–Sun, 5:30 PM – 10:00 PM" },
  { icon: Clock, label: "Dim Sum", value: "Sat–Sun, 10:00 AM – 2:30 PM" },
  { icon: MapPin, label: "Address", value: "888 Canton Street, San Francisco" },
  { icon: Phone, label: "Phone", value: "+1 (415) 555-0188" },
  { icon: Mailbox, label: "Email", value: "reservations@chineseheaven.com" },
];

export default function ReservationsCTA() {
  const [requested, setRequested] = useState(false);

  return (
    <div
      id="reservations"
      className="reservations-section relative flex flex-col justify-center"
      aria-labelledby="reservations-title"
    >
      <div className="relative z-10 w-full glass rounded-[2rem] p-6 sm:p-8 text-center flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-muted mb-3">
            Experience
          </p>
          <h2
            id="reservations-title"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Book Your Table
          </h2>
          <p className="mt-3 text-base text-muted font-light leading-relaxed">
            Walk-ins welcome at the bar. Booking ahead recommended.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {reservationInfo.map((item, index) => (
            <div
              key={item.label}
              className={`group relative p-4 bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-border transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col items-center justify-center text-center h-full ${index === reservationInfo.length - 1 ? "col-span-2" : ""}`}
            >
              <div className="w-9 h-9 rounded-xl bg-foreground/10 flex items-center justify-center mb-2 mx-auto group-hover:bg-foreground/20 transition-colors">
                <item.icon size={18} weight="light" className="text-foreground" aria-hidden="true" />
              </div>
              <p className="text-[10px] font-medium tracking-widest uppercase text-muted mb-1">
                {item.label}
              </p>
              <p className="text-xs font-light text-foreground leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <form
          className="reservation-form grid grid-cols-2 gap-3 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            setRequested(true);
          }}
        >
          <label className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted">Name</span>
            <input
              type="text"
              required
              placeholder="Your name"
              className="w-full rounded-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-light text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted">Phone</span>
            <input
              type="tel"
              placeholder="(415) 000-0000"
              className="w-full rounded-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-light text-foreground placeholder:text-muted focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted">Date</span>
            <input
              type="date"
              required
              className="w-full rounded-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-light text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted">Guests</span>
            <select
              required
              defaultValue="2"
              className="w-full rounded-full bg-white/70 dark:bg-black/40 border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-light text-foreground focus:outline-none focus:border-foreground/40 transition-colors"
            >
              {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="cta-button group col-span-2 inline-flex items-center justify-center gap-3 pl-8 pr-2 py-2 text-base font-medium bg-foreground text-background rounded-full transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] focus-visible"
          >
            <span className="py-2">Request Table</span>
            <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1">
              <Calendar size={18} weight="light" aria-hidden="true" />
            </span>
          </button>
          {requested && (
            <p className="col-span-2 flex items-center justify-center gap-2 text-sm font-light text-foreground">
              <Check size={16} weight="bold" aria-hidden="true" />
              Request received — we confirm by phone shortly.
            </p>
          )}
        </form>

        <div className="text-center">
          <p className="text-sm text-muted font-light">
            Prefer instant booking?{" "}
            <a
              href="https://resy.com/cities/sf/chinese-heaven"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:underline"
            >
              Book on Resy
            </a>{" "}
            or call <a href="tel:+14155550188" className="font-medium text-foreground hover:underline">+1 (415) 555-0188</a>
          </p>
        </div>
      </div>
    </div>
  );
}