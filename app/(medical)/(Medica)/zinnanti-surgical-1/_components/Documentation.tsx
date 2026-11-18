"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Scan, X } from "lucide-react";
import Badge from "./Badge";
import Typography from "./Typography";

const DOCS = [
  { src: "product-documentation-3.webp", alt: "Instructions for Zinnanti Surgical reusable tubing kits and adapters" },
  { src: "product-documentation-1.webp", alt: "Smoke-Evac Fusion Electrode instructions for use" },
  { src: "product-documentation-2.webp", alt: "Tubing adapter kits instructions for use" },
  { src: "product-documentation-4.webp", alt: "Smoke-Evac Fusion Treatment System cart assembly instructions" },
];

const arrowBtn =
  "absolute top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 2k:w-24 2k:h-24 4k:w-32 4k:h-32 rounded-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg transition-colors cursor-pointer";

export default function Documentation() {
  // Index of the document shown in the centre.
  const [active, setActive] = useState(1);
  const n = DOCS.length;
  const go = (dir: number) => setActive((a) => (a + dir + n) % n);
  // Index of the document open in the full-screen viewer (null = closed).
  const [viewing, setViewing] = useState<number | null>(null);

  useEffect(() => {
    if (viewing === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setViewing(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [viewing]);

  return (
    <section id="ifus" className="w-full bg-white py-12 sm:py-16 xl:py-20 2k:py-32 4k:py-44 overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center gap-4 2k:gap-6 4k:gap-8">
        <div className="flex flex-col items-center gap-3 xl:gap-4 2k:gap-6 4k:gap-8" data-aos="fade-up">
          <Badge text="Product Resources" />
          <Typography variant="h2" color="none" className="text-[var(--color-heading)]">
            Access Product Documentation
          </Typography>
          <Typography variant="p" color="muted" className="max-w-[640px] 2k:max-w-[1000px] 4k:max-w-[1400px]">
            Access essential product instructions, safety guidelines, and technical documentation.
            Explore our collection of IFUs to find the information you need for proper product
            use, handling, and maintenance.
          </Typography>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full sm:w-[85%] lg:w-[56%] mt-8 sm:mt-10 xl:mt-12 2k:mt-20 4k:mt-28 mb-4 sm:mb-6 2k:mb-10 aspect-[2/1] sm:aspect-[2.9/1]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {DOCS.map((doc, i) => {
            // -1 = left, 0 = centre, 1 = right; anything further is hidden off-stage
            let pos = (((i - active) % n) + n) % n;
            if (pos > n / 2) pos -= n;
            const isCenter = pos === 0;
            const isHidden = Math.abs(pos) > 1;
            return (
              <div
                key={doc.src}
                role="button"
                tabIndex={isHidden ? -1 : 0}
                aria-hidden={isHidden}
                aria-label={doc.alt}
                onClick={() => (isCenter ? setViewing(i) : setActive(i))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (isCenter) setViewing(i);
                    else setActive(i);
                  }
                }}
                className={`group absolute top-1/2 left-1/2 w-[60%] sm:w-[46%] aspect-[4/3] bg-white rounded-xl 2k:rounded-2xl 4k:rounded-3xl overflow-hidden border-2 4k:border-4 border-[var(--color-primary)] transition-all duration-500 ease-out cursor-pointer ${
                  isCenter
                    ? "z-20 shadow-[0_12px_30px_rgba(0,0,0,0.3)]"
                    : isHidden
                      ? "z-0 opacity-0 pointer-events-none"
                      : "z-10 shadow-sm"
                }`}
                style={{
                  // hidden cards park behind the side cards so they slide in from there
                  transform: `translate(calc(-50% + ${Math.sign(pos) * Math.min(Math.abs(pos), 1) * 58.7}%), -50%) scale(${isCenter ? 1.12 : isHidden ? 0.9 : 1})`,
                }}
              >
                <img
                  src={`/medical/zinnanti-surgical-1/${doc.src}`}
                  alt={doc.alt}
                  className="w-full h-full object-cover object-top"
                />

                {/* Hover state: light blue tint + expand button */}
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-primary)]/15 opacity-0 [.group:hover_&]:opacity-100 [.group:focus-visible_&]:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    aria-label={`View ${doc.alt} full screen`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewing(i);
                    }}
                    className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 2k:w-20 2k:h-20 4k:w-28 4k:h-28 rounded-lg 2k:rounded-xl 4k:rounded-2xl bg-[#4F6744] hover:bg-[#425739] text-white shadow-md transition-colors cursor-pointer"
                  >
                    <Scan className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" strokeWidth={2} />
                  </button>
                </div>
              </div>
            );
          })}

          <button type="button" aria-label="Previous document" onClick={() => go(-1)} className={`${arrowBtn} left-1 sm:left-0 sm:-translate-x-1/2`}>
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" strokeWidth={1.75} />
          </button>
          <button type="button" aria-label="Next document" onClick={() => go(1)} className={`${arrowBtn} right-1 sm:right-0 sm:translate-x-1/2`}>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {/* Full-screen document viewer */}
      {viewing !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={DOCS[viewing].alt}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setViewing(null)}
          data-lenis-prevent
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setViewing(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-11 h-11 2k:w-20 2k:h-20 4k:w-28 4k:h-28 rounded-full bg-white/90 hover:bg-white text-[#4F6744] cursor-pointer"
          >
            <X className="w-6 h-6 2k:w-10 2k:h-10 4k:w-14 4k:h-14" />
          </button>
          <img
            src={`/medical/zinnanti-surgical-1/${DOCS[viewing].src}`}
            alt={DOCS[viewing].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded-lg 2k:rounded-2xl bg-white shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
