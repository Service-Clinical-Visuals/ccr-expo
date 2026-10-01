"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

export default function Ready() {
  return (
    <section
      id="collaborate"
      className="w-full py-12 md:py-14 lg:py-16 min-[2500px]:py-24 min-[3800px]:py-32 bg-[linear-gradient(90deg,#0B1340_0%,#004182_100%)] overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center text-center" data-aos="fade-up">
        <Typography variant="h1" color="white" className="tracking-[-0.02em] !font-bold text-center">
          Are You Ready to Collaborate with Biomedical Experts?
        </Typography>

        <Typography
          variant="p"
          color="none"
          className="mt-3 min-[2500px]:mt-5 min-[3800px]:mt-7 text-white/90 text-center max-w-full lg:max-w-[80%] xl:max-w-[70%]"
        >
          Contact us today to discuss how our OEM services and sterilization
          expertise can elevate your medical products.
        </Typography>

        <div className="mt-7 md:mt-8 min-[2500px]:mt-12 min-[3800px]:mt-16">
          <Button
            text="Consult Our Experts"
            href="#contact"
            variant="secondary"
            className="px-10 py-2.5 md:px-12 !text-[#0B1340] min-[2500px]:px-16 min-[2500px]:py-5 min-[3800px]:px-24 min-[3800px]:py-7 min-[2500px]:rounded-[8px]"
          />
        </div>
      </div>
    </section>
  );
}
