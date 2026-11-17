"use client";

import React from "react";
import { Check } from "lucide-react";
import Typography from "./Typography";
import Button from "./Button";

const points = [
  {
    title: "Surgical Efficiency",
    text: "Designs that help simplify procedures and equipment handling.",
  },
  {
    title: "Cost-Conscious Design",
    text: "Solutions developed with equipment and operational needs in mind.",
  },
];

const PANEL_BG = "bg-[url('/medical/zinnanti-surgical-2/bg3.webp')] bg-[length:100%_100%] bg-no-repeat";

/**
 * About page: "Our Commitment" — blue wave panel flush with the left edge of the viewport,
 * with the handshake image overlapping it on the right.
 */
const OurCommitment = () => {
  return (
    <section className="relative w-full bg-white py-10 sm:py-14 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="relative">
        {/* Desktop: blue panel running from the viewport edge to just past the content */}
        <div
          aria-hidden
          className={`hidden lg:block absolute inset-y-0 left-0 w-[58%] ${PANEL_BG}`}
          data-aos="fade-right"
        />

        <div className="custom-container relative z-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
          {/* Content (carries its own panel background below lg) */}
          <div
            className={`w-full lg:w-[32%] shrink-0 text-white ${PANEL_BG} lg:bg-none p-6 sm:p-8 lg:p-0 lg:py-14 xl:py-16 min-[2500px]:py-28 min-[3800px]:py-40`}
            data-aos="fade-up"
          >
            <Typography variant="h2" color="white" className="leading-snug">
              Our Commitment – Quality, Safety &amp; Efficiency
            </Typography>

            <Typography variant="p" color="white" className="!font-normal text-white/90 leading-relaxed mt-5 pt-5 min-[2500px]:mt-8 min-[2500px]:pt-8 border-t border-white/25">
              At Zinnanti Surgical Design Group, we believe that effective medical innovation
              should address real-world challenges while supporting the needs of healthcare
              professionals.
            </Typography>

            <ul className="mt-5 sm:mt-6 min-[2500px]:mt-10 flex flex-col gap-4 min-[2500px]:gap-7">
              {points.map((point) => (
                <li key={point.title} className="flex items-start gap-3 min-[2500px]:gap-5">
                  <span
                    aria-hidden
                    className="shrink-0 mt-0.5 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 rounded-full bg-white text-[var(--color-secondary)]"
                  >
                    <Check strokeWidth={3} className="w-3 h-3 sm:w-3.5 sm:h-3.5 min-[2500px]:w-5 min-[2500px]:h-5 min-[3800px]:w-7 min-[3800px]:h-7" />
                  </span>
                  <p className="!font-normal leading-relaxed text-white/90">
                    {point.title} – {point.text}
                  </p>
                </li>
              ))}
            </ul>

            <Typography variant="p" color="white" className="!font-normal text-white/90 leading-relaxed mt-5 pt-5 min-[2500px]:mt-8 min-[2500px]:pt-8 border-t border-white/25">
              Our devices are developed with a focus on procedural efficiency, convenient
              functionality, and responsible product design. Disposable attachments and complete
              smoke evacuation packages simplify handling and reduce repeated sterilization.
            </Typography>

            <Button text="Learn More About Us" href="#" variant="outline" className="mt-6 sm:mt-7 min-[2500px]:mt-12" />
          </div>

          {/* Image overlapping the panel */}
          <div className="w-full lg:w-[65%] lg:ml-auto" data-aos="fade-left" data-aos-delay="150">
            <img
              src="/medical/zinnanti-surgical-2/commitment.webp"
              alt="Two medical professionals shaking hands"
              className="w-full h-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
