"use client";

import React from "react";
import Button from "./Button";
import { BarHeading } from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full bg-white section-py">
      <div className="custom-container">
        {/* Side by side only from 2xl (1536): below that (iPad Pro, small laptops)
            the long copy is far taller than the image, so the two stack instead. */}
        <div className="grid grid-cols-1 2xl:grid-cols-[49%_1fr] gap-10 2xl:gap-[2.6vw] items-center">
          {/* Image (pink accent squares + shadow are baked into the file).
              Negative bottom margin cancels the ~15% shadow strip under the
              image so the spacing below it matches the spacing above. */}
          <div className="w-full max-w-[760px] mx-auto 2xl:max-w-none" data-aos="fade-right">
            <img
              src="/medical/winfo/about.webp"
              alt="Winfo spinal surgical instrument sets in sterilisation trays"
              width={920}
              height={668}
              className="block w-full h-auto object-contain -mb-[10.9%] 2xl:w-[47.9vw] 2xl:-ml-[2.7vw] 2xl:-mb-[5.2vw]"
            />
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="150">
            <BarHeading
              eyebrow="About Winfo"
              title="Advancing Precision in Surgical Solutions"
              className="mb-8 xl:mb-[2.1vw]"
            />
            <p className="section-text font-body text-[var(--body)] mb-8 xl:mb-[2.3vw]">
              We Specialize In Providing Surgical Instruments And Retraction Systems For Spinal And Orthopedic
              Procedures. With A Portfolio Covering Open, Minimally Invasive, And Endoscopic Approaches, We Focus On
              Practical Instrument Solutions That Support The Needs Of Surgical Teams—From Establishing Surgical Access
              To Performing Procedure-Specific Tasks. Our Product Range Includes Spinal Fixation And Scoliosis
              Instrument Sets, Minimally Invasive Spine Instruments, Cervical And Lumbar Retraction Systems, And
              Instruments For Endoscopic And Unilateral Biportal Endoscopic (UBE) Procedures. Complementary Solutions
              Include Flexible Reamer Sets And Dedicated Instruments For Lateral And Oblique Lumbar Approaches,
              Offering Customers A Broad Selection Across Different Surgical Applications.
            </p>
            <Button href="#products" className="rounded-[0.75em] px-[2.2em]">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
