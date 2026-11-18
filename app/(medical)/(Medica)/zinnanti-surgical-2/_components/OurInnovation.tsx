"use client";

import React from "react";
import Typography from "./Typography";

const features = [
  {
    title: "Integrated Functionality",
    text: "Combines cutting, coagulation, and suction in one instrument.",
  },
  {
    title: "Practical Surgical Design",
    text: "Developed to support efficient clinical workflow",
  },
  {
    title: "Reduced Equipment Needs",
    text: "Minimizes reliance on separate suction instruments.",
  },
  {
    title: "Direct Smoke Evacuation",
    text: "Collects surgical smoke through the active electrode.",
  },
];

/** About page: "Our Innovation" — lab image on the left, intro + four numbered feature cards on the right. */
const OurInnovation = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 xl:py-20 min-[2500px]:py-32 min-[3800px]:py-44 overflow-hidden">
      <div className="custom-container flex flex-col xl:flex-row xl:items-center gap-10 xl:gap-10 min-[2500px]:gap-20">
        {/* Left: image */}
        <div className="w-full xl:w-[46%] shrink-0 order-2 xl:order-none" data-aos="fade-right">
          <img
            src="/medical/zinnanti-surgical-2/surgical.webp"
            alt="Researcher working with a pipette in a medical laboratory"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: content */}
        <div className="w-full xl:flex-1 flex flex-col items-start order-1 xl:order-none" data-aos="fade-left" data-aos-delay="100">
          <span className="inline-flex items-center gap-2 min-[2500px]:gap-3 rounded-full border border-gray-200 bg-white shadow-sm px-3 py-1 sm:px-4 sm:py-1.5 min-[2500px]:px-6 min-[2500px]:py-2.5 text-[#121C22]">
            <span aria-hidden className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 rounded-full bg-[var(--color-secondary)]" />
            Our Innovation
          </span>

          <Typography variant="h2" color="dark" className="leading-snug mt-4 sm:mt-5 min-[2500px]:mt-8">
            Multiple Functions. One Innovative Surgical Instrument.
          </Typography>

          <Typography variant="p" color="muted" className="!font-normal leading-relaxed mt-3 sm:mt-4 min-[2500px]:mt-6">
            Our patented Smoke-Evac Fusion technology is designed to combine multiple surgical
            functions within a single instrument. It allows healthcare professionals to perform
            cutting and coagulation while simultaneously suctioning smoke, blood, and fluids
            directly through the active electrode.
          </Typography>

          <div className="w-full mt-6 sm:mt-8 min-[2500px]:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 xl:gap-x-8 xl:gap-y-6 min-[2500px]:gap-x-12 min-[2500px]:gap-y-10">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="relative pl-5 sm:pl-6 min-[2500px]:pl-10 min-[3800px]:pl-14"
                data-aos="fade-up"
                data-aos-delay={150 + i * 75}
              >
                {/* Number badge overlapping the card's left edge */}
                <span
                  aria-hidden
                  className="absolute left-0 top-4 sm:top-5 min-[2500px]:top-8 z-10 flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 min-[2500px]:w-[4.5rem] min-[2500px]:h-[4.5rem] min-[3800px]:w-24 min-[3800px]:h-24 bg-[var(--color-secondary)] text-white rounded-tl-xl rounded-br-xl rounded-tr-sm rounded-bl-sm min-[2500px]:rounded-tl-2xl min-[2500px]:rounded-br-2xl font-semibold !text-[1.1rem] sm:!text-[1.25rem] min-[2500px]:!text-[2rem] min-[3800px]:!text-[2.8rem]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="h-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] rounded-tr-2xl rounded-br-[1.75rem] rounded-tl-md rounded-bl-md min-[2500px]:rounded-tr-3xl min-[2500px]:rounded-br-[2.75rem] py-4 pr-4 pl-8 sm:py-5 sm:pr-5 sm:pl-9 min-[2500px]:py-8 min-[2500px]:pr-8 min-[2500px]:pl-14 min-[3800px]:pl-20">
                  <p className="!font-normal leading-relaxed text-[#4A5568] xl:!text-[0.9375rem] min-[2500px]:!text-[1.4rem] min-[3800px]:!text-[1.85rem]">
                    <strong className="font-semibold text-[#121C22]">{feature.title}</strong> – {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurInnovation;
