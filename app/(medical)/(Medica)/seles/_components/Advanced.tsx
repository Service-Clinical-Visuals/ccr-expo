"use client";

import React from "react";
import Button from "./Button";

export default function Advanced() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const systems = [
    {
      title: "Nail Systems",
      description: "Optimized for internal fixation, our trauma nail systems provide strength, precision, and faster bone healing.",
      image: "/medical/seles/p1.png",
    },
    {
      title: "Plate Systems",
      description: "Engineered for optimal bone-plate interaction, our trauma plates ensure precise alignment and stable fracture fixation.",
      image: "/medical/seles/p2.png",
    },
    {
      title: "Screw Systems",
      description: "Designed for maximum hold and ease of insertion, our trauma screw systems provide secure fixation across various fracture patterns.",
      image: "/medical/seles/p3.png",
    },
  ];

  return (
    <section id="advanced" className="w-full relative z-10 py-14 sm:py-20 md:py-24 min-[2000px]:py-32 min-[3000px]:py-40 bg-[#0A0A0A]">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 min-[2000px]:gap-8 items-stretch">

          {/* Column 1: Content */}
          <div
            className="flex flex-col justify-center lg:pr-4 xl:pr-8"
            data-aos="fade-right"
          >
            <h2 className="mb-6 min-[2000px]:mb-8 min-[3000px]:mb-10 capitalize text-white text-[24px] sm:text-[28px] md:text-[32px] min-[2000px]:text-[44px] min-[3000px]:text-[56px] font-orbitron font-semibold leading-[1.3]">
              Advanced Trauma Fixation Solutions
            </h2>

            <p className="mb-8 min-[2000px]:mb-12 min-[3000px]:mb-16 text-[#D1D1D1] text-[16px] sm:text-[18px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] leading-relaxed">
              Our comprehensive trauma fixation systems are engineered to deliver strength, precision, and reliable stability across a wide range of fracture management needs, supporting effective fixation and promoting confident clinical outcomes.
            </p>

            <div className="flex flex-col gap-5 min-[2000px]:gap-8 min-[3000px]:gap-10 mb-10 min-[2000px]:mb-14 min-[3000px]:mb-16">
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[3000px]:w-9 min-[3000px]:h-9 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[15px] sm:text-[17px] min-[2000px]:text-[24px] min-[3000px]:text-[30px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Comprehensive Solutions</strong> – Nail, plate, and screw systems designed to support precise fixation and effective fracture management.
                </p>
              </div>

              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[3000px]:w-9 min-[3000px]:h-9 rounded-full bg-[#CC0000] flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[15px] sm:text-[17px] min-[2000px]:text-[24px] min-[3000px]:text-[30px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Reliable Performance</strong> – Advanced designs deliver secure fixation, optimal stability, and dependable clinical performance.
                </p>
              </div>
            </div>

            <Button
              text="Discover Solutions &rarr;"
              bgColor="#DBA018"
              textColor="#ffffff"
              onClick={scrollToContact}
              className="w-fit px-6 min-[2000px]:px-8 min-[3000px]:px-10 py-2.5 min-[2000px]:py-4 min-[3000px]:py-5 !text-[16px] min-[2000px]:!text-[22px] min-[3000px]:!text-[28px] font-semibold"
            />
          </div>

          {/* Columns 2, 3, 4: Cards */}
          {systems.map((system, index) => (
            <div
              key={index}
              className="group relative bg-[#090909] border border-white/10 flex flex-col p-4 min-[2000px]:p-6 min-[3000px]:p-8 transition-all duration-300 hover:border-[#DBA018]/50 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >


              {/* Yellow Icon top right */}
              <div className="absolute top-4 right-4 w-[44px] h-[44px] min-[2000px]:w-[60px] min-[2000px]:h-[60px] min-[3000px]:w-[80px] min-[3000px]:h-[80px] shrink-0 rounded-full bg-[#DBA018] flex items-center justify-center z-10 transition-transform duration-300 group-hover:scale-110">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                  <path d="M7 17L17 7M17 7v9M17 7H8" />
                </svg>
              </div>

              {/* Product Image */}
              <div className="w-full flex items-center justify-center min-[2000px]:min-h-[300px] min-[3000px]:min-h-[400px]">
                <img
                  src={system.image}
                  alt={system.title}
                  className="object-contain p-3 min-[2000px]:p-5 min-[3000px]:p-8 transition-transform duration-500 group-hover:scale-110 max-h-[250px] min-[2000px]:max-h-[350px] min-[3000px]:max-h-[450px]"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col items-start pt-5 min-[2000px]:pt-8 pb-2">
                <h3 className="text-white text-[16px] sm:text-[18px] min-[2000px]:text-[24px] min-[3000px]:text-[32px] font-orbitron font-regular leading-tight mb-2.5 min-[2000px]:mb-4">
                  {system.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] min-[2000px]:text-[22px] min-[3000px]:text-[28px] text-[#D1D1D1] leading-[1.6] text-left">
                  {system.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}