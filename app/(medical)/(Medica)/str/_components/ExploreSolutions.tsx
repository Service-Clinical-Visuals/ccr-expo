"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

export default function ExploreSolutions() {
  return (
    <section
      id="solutions"
      className="w-full py-16 lg:py-24 xl:py-28 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="custom-container">
        <div className="flex flex-col xl:flex-row items-center gap-12 min-[3800px]:gap-16 w-full">
          {/* Video Content (Left side on Desktop, Bottom on Mobile/Tablet) */}
          <div
            className="w-full xl:w-[60%] relative aspect-video overflow-hidden order-2 xl:order-1 rounded-[5px] shadow-sm border border-gray-200 bg-[#E5E7EB]"
            data-aos="fade-right"
          >
            <DynamicVideoPlayer
              type="short-2"
              className="absolute inset-0 w-full h-full object-cover rounded-[5px]"
            />
          </div>

          {/* Text Content (Right side on Desktop, Top on Mobile/Tablet) */}
          <div
            className="flex flex-col gap-6 w-full xl:w-[40%] order-1 xl:order-2"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-5 bg-[#F6821F]" />
              <Typography
                variant="h4"
                color="primary"
                className="!font-semibold uppercase tracking-wide"
              >
                EXPLORE OUR SOLUTIONS
              </Typography>
            </div>

            <Typography variant="h2" color="dark">
              Precision-Driven Products Supporting The Future of Healthcare
            </Typography>

            <div className="flex flex-col gap-4 text-left">
              <Typography variant="p" color="muted" className="leading-relaxed">
                Our product range reflects a commitment to advancing medical
                practice through thoughtfully engineered solutions and dependable
                product design. Bringing together specialized technologies for
                regenerative applications, tissue restoration, aesthetic
                procedures, women's health, and orthopedic care, our portfolio is
                created to address diverse clinical requirements.
              </Typography>

              <Typography variant="p" color="muted" className="leading-relaxed">
                We combine scientific knowledge, engineering expertise, and
                controlled production processes to develop solutions that
                healthcare professionals can confidently integrate into their
                practices. With continuous attention to product development and
                evolving medical requirements, we strive to deliver
                technologies that enable efficient procedures, consistent
                performance, and greater possibilities for patient-focused care.
              </Typography>
            </div>

            <div className="pt-2">
              <Button variant="outline-orange" href="#products">
                Discover Our Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
