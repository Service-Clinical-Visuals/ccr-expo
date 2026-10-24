"use client";

import React from "react";
import Typography from "./Typography";
import Button from "./Button";

// Dotted decoration drawn with a repeating radial gradient
const dotsClass =
  "absolute pointer-events-none bg-[radial-gradient(circle,#1A6AFF_1.5px,transparent_2px)] bg-[length:20px_18px] min-[2500px]:bg-[radial-gradient(circle,#1A6AFF_2.25px,transparent_3px)] min-[2500px]:bg-[length:30px_27px] min-[3800px]:bg-[radial-gradient(circle,#1A6AFF_3px,transparent_4px)] min-[3800px]:bg-[length:40px_36px]";

export default function AboutUs() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 xl:py-20 2xl:py-24 min-[2500px]:py-32 min-[3800px]:py-44 bg-white overflow-hidden">
      <div className="custom-container grid grid-cols-1 xl:grid-cols-12 items-center gap-10 sm:gap-12 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Heading + content */}
        <div className="xl:col-span-6 flex flex-col items-start" data-aos="fade-right">
          <div className="flex items-center gap-3 2xl:gap-4 min-[2500px]:gap-5 min-[3800px]:gap-7 mb-3 2xl:mb-4 min-[2500px]:mb-6 min-[3800px]:mb-8">
            <span className="block w-5 2xl:w-6 min-[2500px]:w-9 min-[3800px]:w-12 h-[3px] min-[2500px]:h-1 min-[3800px]:h-1.5 rounded-full bg-primary" />
            <Typography variant="h4" color="primary" className="uppercase">
              Who We Are
            </Typography>
          </div>

          <Typography variant="h2" color="dark" className="mb-4 sm:mb-5 2xl:mb-6 min-[2500px]:mb-9 min-[3800px]:mb-12">
            We are committed to shaping the future of healthcare
          </Typography>

          <div className="flex flex-col gap-4 2xl:gap-5 min-[2500px]:gap-7 min-[3800px]:gap-10">
            <Typography variant="p" color="muted">
              Riester is a trusted German manufacturer of innovative, high-quality medical devices, serving primary,
              hospital, and specialist care worldwide. With a heritage dating back to 1948, we have built our
              reputation on precision, reliability, and continuous innovation. Our products are designed to support
              healthcare professionals with dependable technology for accurate diagnosis and better patient care. By
              combining German engineering expertise with a deep understanding of healthcare needs, we develop
              solutions that help professionals work with greater confidence and efficiency across a wide range of
              clinical environments.
            </Typography>
            <Typography variant="p" color="muted">
              Since 2007, Riester has been part of Halma plc, a global group of life-saving technology companies,
              strengthening our international reach and capabilities. Through trusted partnerships, global
              expertise, and a strong commitment to quality, we continue to address the evolving challenges faced by
              hospitals and healthcare systems. As part of Halma, we benefit from a wider network of innovation and
              knowledge while remaining focused on our core mission: delivering reliable medical technology that
              creates meaningful value for healthcare professionals and contributes to a healthier future.
            </Typography>
          </div>

          <div className="mt-6 sm:mt-8 2xl:mt-9 min-[2500px]:mt-12 min-[3800px]:mt-16">
            <Button text="Read More" variant="primary" href="#about" />
          </div>
        </div>

        {/* Image with dotted corners */}
        <div className="xl:col-span-6 w-full flex justify-center xl:justify-end" data-aos="fade-left">
          <div className="relative w-[88%] sm:w-[80%] xl:w-[86%] mx-auto xl:mx-0 xl:mr-[5%] my-8 sm:my-10 min-[2500px]:my-14 min-[3800px]:my-20">
            <div className={`${dotsClass} -top-8 -left-8 sm:-top-9 sm:-left-10 min-[2500px]:-top-14 min-[2500px]:-left-14 min-[3800px]:-top-20 min-[3800px]:-left-20 w-[38%] h-[45%]`} />
            <div className={`${dotsClass} -bottom-8 -right-8 sm:-bottom-9 sm:-right-10 min-[2500px]:-bottom-14 min-[2500px]:-right-14 min-[3800px]:-bottom-20 min-[3800px]:-right-20 w-[45%] h-[45%]`} />

            <div className="relative w-full aspect-[715/605] overflow-hidden rounded-[10px] min-[2500px]:rounded-[15px] min-[3800px]:rounded-[20px]">
              <img
                src="/medical/rudolf/s1.webp"
                alt="Healthcare professionals in a modern clinic"
                className="w-full h-full object-cover object-[70%_center]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
