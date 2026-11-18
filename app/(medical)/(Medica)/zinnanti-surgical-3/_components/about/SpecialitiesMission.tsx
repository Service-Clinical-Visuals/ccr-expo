"use client";

import React from "react";
import Typography from "../Typography";

interface MissionCard {
  title: string;
  description: string;
  image: string;
  imagePosition: "top" | "bottom";
}

const cardsData: MissionCard[] = [
  {
    title: "Our Mission",
    description:
      "To advance surgical care through purposeful innovation, specialized technology, and a commitment to supporting healthcare professionals.",
    image: "/medical/zinnanti-surgical-3/about/s1.webp",
    imagePosition: "bottom",
  },
  {
    title: "Our Vision",
    description:
      "To become a trusted name in specialized surgical technology by continuously advancing smoke evacuation solutions.",
    image: "/medical/zinnanti-surgical-3/about/s2.webp",
    imagePosition: "top",
  },
  {
    title: "Our Commitment",
    description:
      "We continue to work alongside leading academic medical centers and healthcare professionals to develop solutions that address evolving clinical needs and contribute to better patient care.",
    image: "/medical/zinnanti-surgical-3/about/s3.webp",
    imagePosition: "bottom",
  },
];

/**
 * SpecialitiesMission Section - Zinnanti Surgical About Page
 * Master Reference: Inogen Development Standards
 * - 3 Capsule/Arch Shaped Cards in a single row on desktop (>=1036px)
 * - Odd 3rd card centered on 2-column tablet layout
 */
const SpecialitiesMission = () => {
  return (
    <section className="w-full py-16 xl:py-24 bg-[#4F6744] bg-[url('/medical/zinnanti-surgical-3/bg.webp?v=2')] bg-cover bg-center bg-no-repeat overflow-hidden text-white relative">
      <div className="custom-container flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-1 bg-white rounded-full inline-block" />
            <span className="heading-blue text-white">
              Our Specialities
            </span>
          </div>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight"
          >
            Advanced Surgical Solutions Across Multiple Medical Specialties
          </Typography>

          <Typography
            variant="p"
            color="white"
            className="leading-relaxed text-white/90 text-center max-w-2xl mx-auto"
          >
            Driven by innovation and guided by integrity, our mission, vision, and values define who we are, how we operate, and the standards we uphold in advancing healthcare technology.
          </Typography>
        </div>

        {/* 3 Capsule / Arch Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {cardsData.map((card, idx) => (
            <div
              key={card.title}
              className={`w-full rounded-[140px] sm:rounded-[180px] lg:rounded-[200px] overflow-hidden bg-white shadow-2xl flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 group border-2 border-white/20 ${
                idx === 2
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1.25rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {card.imagePosition === "top" ? (
                <>
                  {/* Top Image */}
                  <div className="w-full h-[260px] sm:h-[300px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Bottom Content */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center px-8 sm:px-10 py-10 sm:py-12 bg-white">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Top Content */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center px-8 sm:px-10 py-10 sm:py-12 bg-white">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#333333] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Image */}
                  <div className="w-full h-[260px] sm:h-[300px] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialitiesMission;

