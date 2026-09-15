"use client";

import React from "react";
import { Check } from "lucide-react";
import Button from "./Button";

interface FeatureItem {
  title: string;
  description: string;
}

const HIGHLIGHTS: FeatureItem[] = [
  {
    title: "Long-Term Vision & Continuity",
    description:
      "Our decisions and developments are focused on continuity and sustainable long-term growth.",
  },
  {
    title: "Highly Skilled Workforce",
    description:
      "Around 200 highly qualified and experienced employees contribute significantly to the company’s success.",
  },
  {
    title: "Strategic Location & Expertise",
    description:
      "Our plant in Naila, Northern Bavaria combines experienced professionals with strong operational capabilities.",
  },
];

export default function InnovationAndTradition() {
  return (
    <section
      className="custom-container py-12 sm:py-16 md:py-20 xl:py-24 px-4 sm:px-6 md:px-8 xl:px-12"
    >
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-10  items-center">
        {/* Left Column: Text Content & Key Highlights */}
        <div
          className="xl:col-span-5 flex flex-col gap-5 sm:gap-6"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          {/* Section Heading */}
          <h2 className="section-title font-semibold tracking-tight font-exo2">
            Innovation And Tradition
          </h2>

          {/* Intro Paragraphs */}
          <p className="section-text font-medium leading-relaxed font-outfit">
            SERAG-WIESSNER Is A Medium-Sized Company That Is Family-Owned And
            Managed. We Can Now Look Back On A Successful Company History Of 160
            Years.
          </p>

          <p className="section-text leading-relaxed font-normal font-outfit">
            Our Decisions And Developments Are Determined By Continuity And
            Long-Term Future Orientation. This Forward Thinking Has Resulted In
            Customer And Supplier Relations That Have Been Sustained Over Many
            Decades, As Well As The Development Of New Business Areas. The Two
            Hundred Highly Qualified And Experienced Workers At Our Plant In
            Naila, Northern Bavaria, Make A Decisive Contribution To Our Success.
          </p>

          {/* Highlights List with Pink Check Badges */}
          <div className="flex flex-col gap-4 pt-1 sm:pt-2">
            {HIGHLIGHTS.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-3.5"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 100}
                data-aos-duration="600"
              >
                {/* Circular Pink Badge with Check Icon */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e2007a] flex items-center justify-center flex-shrink-0 text-white mt-0.5 shadow-sm shadow-[#e2007a]/30">
                  <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                </div>

                {/* Highlight Content */}
                <p className="section-text text-slate-700 leading-relaxed font-outfit flex-1">
                  <strong className="font-semibold font-exo2">
                    {item.title}
                  </strong>{" "}
                  – {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-3 sm:pt-4">
            <Button href="#about" variant="primary">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Right Column: Facility Image */}
        <div
          className="xl:col-span-7 w-full"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="relative w-full h-full overflow-hidden ">
            <img
              src="/medical/serag-wiessner/abt.png"
              alt="SERAG-WIESSNER Headquarters and Production Plant in Naila"
              className="w-full h-full object-contain "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
