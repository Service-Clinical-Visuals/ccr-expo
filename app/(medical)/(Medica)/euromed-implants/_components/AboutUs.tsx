"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-20 lg:py-30 bg-white overflow-hidden">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8 min-[3800px]:gap-16 items-center">

          {/* Text Content */}
          <div className="xl:col-span-6 flex flex-col gap-3 order-1 xl:order-1" data-aos="fade-right">
            <Typography variant="h5" className="text-[#36679B] font-medium">
              • About Us
            </Typography>

            <Typography variant="h2" color="dark" className="leading-tight">
              Engineering Precision. Advancing Orthopaedic Care.
            </Typography>

            <div className="flex flex-col gap-4">
              <Typography variant="p" color="dark" className="leading-relaxed">
                Euromed Implants GmbH, headquartered in Stade near Hamburg, started in the year 2009. The company founder benefits from many years of know-how of the company MediMet, which he founded in 1994 as well. MediMet is a subcontractor and leading production company of implants for well-known, international OEM companies.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed">
                Today, Euromed Implants is a globally active, highly-specialised company in the field of implant and trauma technology, which offers primary, revision and tumour as well as trauma product solutions.
              </Typography>
              <Typography variant="p" color="dark" className="leading-relaxed">
                We rely on proven implants and make good things even better. 30 years of experience, reliable quality and the consistent implementation of user needs have resulted in an extensive state-of-the-art portfolio of hip and knee surgery.
              </Typography>
            </div>

            <div className="pt-4">
              <Button text="Learn More" href="#about" variant="primary" showIcon={false} />
            </div>
          </div>

          {/* Image */}
          <div className="w-full xl:col-span-6 relative order-2 xl:order-2 flex justify-center xl:justify-end mt-12 xl:mt-0 min-[3800px]:mt-20" data-aos="fade-left" data-aos-delay="100">

            <div className="relative w-[90%] md:w-[80%] xl:w-full max-w-[685px] min-[3800px]:max-w-[1200px]">
              <div className="absolute -bottom-8 -left-10 md:-bottom-15 md:-left-20 min-[3800px]:-bottom-24 min-[3800px]:-left-32 w-full h-full bg-[#67ADD080] rounded-2xl min-[3800px]:rounded-[3rem] z-0"></div>

              {/* Foreground Image */}
              <div className="relative z-10 shadow-2xl rounded-2xl min-[3800px]:rounded-[3rem] overflow-hidden aspect-[682/700]">
                <img src="/euromed-implants/section22.png" alt="About Euromed Implants" className="w-full shadow-2xl h-full object-cover" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
