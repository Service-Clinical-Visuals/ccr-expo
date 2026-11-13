"use client";

import React from "react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";

const SERVICES = [
  { num: "01", title: "Audit Service", icon: "/medical/apollo/icon1.webp", hover: "/medical/apollo/h1.webp" },
  { num: "02", title: "Education", icon: "/medical/apollo/icon2.webp", hover: "/medical/apollo/h2.webp" },
  { num: "03", title: "Cleaning instruction", icon: "/medical/apollo/icon3.webp", hover: "/medical/apollo/h3.webp" },
  { num: "04", title: "Service & Repair", icon: "/medical/apollo/icon4.webp", hover: "/medical/apollo/h4.webp" },
  { num: "05", title: "Service Center", icon: "/medical/apollo/icon5.webp", hover: "/medical/apollo/h5.webp" },
  { num: "06", title: "Export", icon: "/medical/apollo/icon6.webp", hover: "/medical/apollo/h6.webp" },
];

function ServiceCard({ item }: { item: (typeof SERVICES)[number] }) {
  return (
    <Link
      href="#"
      aria-label={item.title}
      className="group relative block w-full aspect-[516/350] rounded-[6px] overflow-hidden bg-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2"
    >
      {/* Default state: green hex pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0"
        style={{ backgroundImage: "url('/medical/apollo/bg2.webp')" }}
      >
        <span
          aria-hidden
          className="card-num absolute top-[10%] right-[10%] font-head font-bold text-white"
        >
          {item.num}
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.9em] pt-[4%] text-white">
          <img src={item.icon} alt="" aria-hidden className="w-[clamp(36px,2.6vw,110px)] h-auto" />
          <h3 className="card-title font-head font-semibold">{item.title}</h3>
        </div>
      </div>

      {/* Hover state: photo (number + title are baked into the image) */}
      <img
        src={item.hover}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100"
      />
    </Link>
  );
}

export default function BeyondProducts() {
  return (
    <section id="services" className="w-full bg-white py-16 sm:py-20 xl:py-[3.4vw]">
      <div className="custom-container">
        <div className="text-center max-w-[1100px] min-[1921px]:max-w-[60%] mx-auto mb-10 xl:mb-12" data-aos="fade-up">
          <Eyebrow className="mb-4 xl:mb-5">Beyond Products</Eyebrow>
          <h2 className="section-title font-head font-bold text-[var(--heading)] mb-4 xl:mb-4">
            Enhancing Equipment Performance Through Expert Healthcare Support
          </h2>
          <p className="section-text font-inter text-[var(--body)]">
            We provide end-to-end healthcare equipment support, ensuring reliable performance, safety, and
            uninterrupted patient care through installation, maintenance, management, and technical assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-x-[1.9vw] xl:gap-y-[1.1vw]">
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className="w-full max-w-[520px] mx-auto sm:max-w-none"
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
            >
              <ServiceCard item={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
