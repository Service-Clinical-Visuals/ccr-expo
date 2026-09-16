"use client";

import React from "react";
import Typography from "./Typography";
import { ArrowRight } from "lucide-react";

export default function ProductLineup() {
  const products = [
    {
      title: "Regenerative Therapeutics",
      description:
        "Advanced therapies designed to activate the body's natural healing processes.",
      color: "#4B95FB",
      icon: "/medical/str/l1.png",
      image: "/medical/str/p1.jpg",
    },
    {
      title: "Regenerative Orthobiology",
      description:
        "Harnessing biology to support bone, cartilage and joint regeneration.",
      color: "#05C99F",
      icon: "/medical/str/l2.png",
      image: "/medical/str/p2.png",
    },
    {
      title: "Regenerative Aesthetics",
      description:
        "Natural-looking rejuvenation for healthier, younger-looking skin—restoring radiance, freshness, and a beautifully refreshed appearance.",
      color: "#C66978",
      icon: "/medical/str/l3.png",
      image: "/medical/str/p3.png",
    },
    {
      title: "Major Ozone Therapies",
      description:
        "Ozone based therapies for improved oxygenation and cellular health.",
      color: "#594BCD",
      icon: "/medical/str/l4.png",
      image: "/medical/str/p4.png",
    },
    {
      title: "Regenerative Urogynecology",
      description:
        "Restoring function and confidence through advanced regenerative solutions.",
      color: "#03A0A9",
      icon: "/medical/str/l5.png",
      image: "/medical/str/p5.png",
    },
    {
      title: "Orthopedic Implant Technologies",
      description:
        "Next-generation implants for better mobility, stability and long-term outcomes.",
      color: "#014393",
      icon: "/medical/str/l6.png",
      image: "/medical/str/p6.png",
    },
  ];

  return (
    <section
      id="products"
      className="w-full py-16 lg:py-24 xl:py-28 bg-white overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Centered Header */}
        <div
          className="w-full xl:max-w-[70%] max-w-[90%] text-center flex flex-col items-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-[2px] bg-[#F6821F]" />
            <Typography
              variant="h4"
              color="primary"
              className="uppercase tracking-wide font-semibold"
            >
              Our Product Lineup
            </Typography>
          </div>

          <Typography
            variant="h2"
            color="dark"
          >
            Regenerative Medicine Technologies
          </Typography>

          <Typography
            variant="p"
            color="muted"
            className="leading-relaxed"
          >
            We develop innovative orthopedic solutions that support effective
            healing, restore mobility and function, enhance surgical outcomes,
            and help patients return to active, independent lives with improved
            comfort, confidence, and overall quality of life.
          </Typography>
        </div>

        {/* 6 Cards Grid — 3 columns on md+ */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {products.map((item, idx) => {
            return (
              <div
                key={idx}
                className="relative overflow-hidden rounded-[10px] border border-[#B8B8B8] bg-white min-h-[295px] h-auto flex flex-col justify-between p-[30px] shadow-sm group cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-lg"
              >
                {/* Background image on hover */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 z-0 bg-black/50 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-start gap-[20px]">
                  {/* Custom PNG Icon Circle */}
                  <div
                    className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-110 shrink-0 p-[12px]"
                    style={{ backgroundColor: item.color }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-contain filter brightness-0 invert"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex flex-col gap-[10px]">
                    <Typography
                      variant="h3"
                      color="dark"
                      className="group-hover:text-white leading-snug transition-colors duration-300"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="muted"
                      className="group-hover:text-white/90 leading-relaxed transition-colors duration-300 line-clamp-3"
                    >
                      {item.description}
                    </Typography>
                  </div>
                </div>

                {/* Arrow button */}
                <div className="relative z-10 w-full flex justify-end">
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:translate-x-1"
                    style={{ backgroundColor: item.color }}
                  >
                    <ArrowRight className="w-[20px] h-[20px]" strokeWidth={2} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}