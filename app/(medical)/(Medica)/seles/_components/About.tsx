"use client";

import React from "react";
import Button from "./Button";

export default function About() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="w-full relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 min-[2000px]:py-32 min-[3000px]:py-40">
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all">
        {/* Side-by-side Layout */}
        <div className="relative w-full grid grid-cols-1 min-[1025px]:grid-cols-12 items-center gap-6 min-[1025px]:gap-8 lg:gap-12">
          {/* Left: Building Image */}
          <div
            className="w-full min-[1025px]:col-span-6 h-[350px] sm:h-[490px] md:h-[580px] min-[1025px]:h-[600px] xl:h-[650px] min-[2000px]:h-[800px] min-[3000px]:h-[1000px] relative overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src="/medical/seles/about.png"
              alt="oltho Facility"
              className="w-full h-full object-cover object-center grayscale"
            />
          </div>

          {/* Right: Content */}
          <div
            className="w-full min-[1025px]:col-span-6 flex flex-col items-start"
            data-aos="fade-left"
          >
            <h2 className="font-orbitron font-semibold text-[28px] min-[2000px]:text-[40px] min-[3000px]:text-[50px] text-white mb-6 min-[2000px]:mb-10 min-[3000px]:mb-14">
              Advanced Orthopedic Solutions
            </h2>
            <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] mb-4 min-[2000px]:mb-6 leading-relaxed">
              oltho is a leading brand of spine and trauma orthopedics, bringing business knowledge and production intelligence to deliver quality, art, fast service, and the best price-value proposition to help improve patient's comfort.
            </p>
            <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] mb-4 min-[2000px]:mb-6 leading-relaxed">
              Since our establishment, we have been focusing on patient comfort as our core guidance to bring the best solutions to patients through our chain of partners and distributors worldwide.
            </p>
            <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] mb-4 min-[2000px]:mb-6 leading-relaxed">
              Our service focuses on orthopedics trauma and spine surgery products such as locking plates & screws, cannulated screws, intramedullary nails, spinal stabilization systems, peek cage, cervical plates, cervical disc prosthesis, and craniomaxillofacial plates and screws.
            </p>
            <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] mb-8 min-[2000px]:mb-12 min-[3000px]:mb-16 leading-relaxed">
              We achieve high-quality and reliable products by implementing high standards and state-of-the-art machinery and tools. Our company holds CE Certificate and ISO 13485:2016 Certificates.
            </p>

            {/* Checkmarks */}
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[3000px]:w-9 min-[3000px]:h-9 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Orthopedic Expertise</strong> — Specialised in spine and trauma orthopedics, combining business knowledge, production expertise, and specialised medical device manufacturing.
                </p>
              </div>
              <div className="flex items-start gap-3 min-[2000px]:gap-5">
                <div className="w-5 h-5 min-[2000px]:w-7 min-[2000px]:h-7 min-[3000px]:w-9 min-[3000px]:h-9 rounded-full bg-white flex items-center justify-center shrink-0 mt-1 min-[2000px]:mt-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-[2000px]:scale-125 min-[3000px]:scale-150">
                    <path d="M10 3L4.5 8.5L2 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-baloo text-[18px] sm:text-[20px] min-[2000px]:text-[28px] min-[3000px]:text-[36px] text-[#D1D1D1] leading-relaxed">
                  <strong className="text-white font-semibold">Comprehensive Portfolio</strong> — Includes locking plates and screws, cannulated screws, intramedullary nails, spinal systems, PEEK cages, cervical plates, disc prostheses, and craniomaxillofacial solutions.
                </p>
              </div>
            </div>

            <Button
              text="Explore Our Story"
              bgColor="#DBA018"
              textColor="#ffffff"
              onClick={scrollToContact}
              className="!text-[18px] min-[2000px]:!text-[24px] min-[3000px]:!text-[30px] min-[2000px]:px-8 min-[3000px]:px-10 min-[2000px]:py-4 min-[3000px]:py-5 font-semibold"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
