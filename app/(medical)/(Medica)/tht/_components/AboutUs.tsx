"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-16 lg:py-24 min-[2500px]:py-40 min-[3800px]:py-52 bg-white overflow-hidden relative">
      <div className="custom-container">
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-16 xl:gap-[5%] items-center">

          {/* Left Content */}
          <div className="flex flex-col gap-5 min-[2500px]:gap-8 min-[3800px]:gap-10" data-aos="fade-right">
            <Typography variant="h1" color="dark">
              About THT Bio-Science
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              THT Bio-Science has now developed a hi-tech diversified biomedical industry out of its two centuries old core business. As a major independent player in the design, research, production and sale of surgical implants, THT Bio-Science is relied on by the medical world to develop highly technical solutions to answer the increasingly complex requirements of modern surgery.
            </Typography>

            <Typography variant="p" color="muted" className="leading-relaxed">
              THT Bio-Science develops practical medical solutions designed to meet the needs of patients and healthcare professionals. Our expertise combines innovation, safety, reliability, and continuous monitoring to ensure consistent product performance throughout its lifecycle.
            </Typography>

            <hr className="border-0 h-px bg-gray-300 my-2 min-[2500px]:my-4" />

            {/* Icon Boxes */}
            <div className="grid grid-cols-1 min-[481px]:grid-cols-3 xl:flex xl:flex-wrap gap-4 md:gap-6 xl:gap-8 min-[2500px]:gap-12">
              <div className="flex items-center gap-4 min-[2500px]:gap-6 border border-[#2A2A2A] rounded-lg min-[2500px]:rounded-xl px-5 py-4 min-[2500px]:px-8 min-[2500px]:py-6 bg-white">
                <img src="/tht/ic1.png" alt="Years Of Expertise" className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] min-[2500px]:w-[6rem] min-[2500px]:h-[6rem] min-[3800px]:w-[8rem] min-[3800px]:h-[8rem] object-contain shrink-0" />
                <div className="flex flex-col gap-1">
                  <Typography variant="h3" color="dark" className="font-bold">30 +</Typography>
                  <Typography variant="span" color="dark" className="leading-snug">Years Of<br />Expertise</Typography>
                </div>
              </div>

              <div className="flex items-center gap-4 min-[2500px]:gap-6 border border-[#2A2A2A] rounded-lg min-[2500px]:rounded-xl px-5 py-4 min-[2500px]:px-8 min-[2500px]:py-6 bg-white">
                <img src="/tht/icon1.png" alt="Million Products Sold" className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] min-[2500px]:w-[6rem] min-[2500px]:h-[6rem] min-[3800px]:w-[8rem] min-[3800px]:h-[8rem] object-contain shrink-0" />
                <div className="flex flex-col gap-1">
                  <Typography variant="h3" color="dark" className="font-bold">2.00 +</Typography>
                  <Typography variant="span" color="dark" className="leading-snug">Million<br />Products Sold</Typography>
                </div>
              </div>

              <div className="flex items-center gap-4 min-[2500px]:gap-6 border border-[#2A2A2A] rounded-lg min-[2500px]:rounded-xl px-5 py-4 min-[2500px]:px-8 min-[2500px]:py-6 bg-white">
                <img src="/tht/icon2.png" alt="Customer Countries" className="w-[3rem] h-[3rem] lg:w-[4rem] lg:h-[4rem] min-[2500px]:w-[6rem] min-[2500px]:h-[6rem] min-[3800px]:w-[8rem] min-[3800px]:h-[8rem] object-contain shrink-0" />
                <div className="flex flex-col gap-1">
                  <Typography variant="h3" color="dark" className="font-bold">50 +</Typography>
                  <Typography variant="span" color="dark" className="leading-snug">Customer<br />Countries</Typography>
                </div>
              </div>
            </div>

            <hr className="border-0 h-px bg-gray-300 my-2 min-[2500px]:my-4" />

            <Typography variant="p" color="muted" className="leading-relaxed">
              With a strong focus on safety, reliability, and long-term performance, our approach combines continuous monitoring and quality control throughout the product lifecycle.
            </Typography>

            <div className="mt-3 min-[2500px]:mt-6">
              <Button text="Learn More About Us" href="#about" variant="primary" showIcon={true} className="shadow-[0_6px_16px_rgba(0,0,0,0.25)]" />
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative w-full flex justify-center xl:justify-end py-[8%] xl:py-[10%]" data-aos="fade-left">
            {/* Dark block escaping container to the right edge of the viewport */}
            <div className="absolute top-0 bottom-0 left-[38%] -right-[50vw] bg-primary rounded-l-[24px] md:rounded-l-[32px] min-[2500px]:rounded-l-[48px] min-[3800px]:rounded-l-[64px] z-0" aria-hidden="true"></div>

            {/* Image card */}
            <div className="relative z-10 w-full max-w-[560px] lg:max-w-none bg-white rounded-2xl min-[2500px]:rounded-3xl min-[3800px]:rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] overflow-hidden aspect-[475/430]">
              <img src="/tht/sec2.png" alt="THT Bio-Science 3D Mesh" className="w-full h-full object-contain" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
