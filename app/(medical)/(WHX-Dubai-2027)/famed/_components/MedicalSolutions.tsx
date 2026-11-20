"use client";

import React from "react";

const solutions = [
  {
    title: "Solutions for operating rooms",
    text: "Designed to support effective smoke evacuation and improved visibility during surgical procedures.",
    image: "/medical/famed/S1.webp",
    alt: "Surgeon in a cap and mask during an operation",
  },
  {
    title: "Solutions for Hospital Emergency Wards",
    text: "Practical solutions that help maintain cleaner and safer emergency care environments.",
    image: "/medical/famed/S2.webp",
    alt: "Paramedics bringing a patient into an emergency ward on a stretcher",
  },
  {
    title: "Solutions for treatment rooms",
    text: "Compact, efficient solutions for managing smoke and fluids during clinical treatments.",
    image: "/medical/famed/S3.webp",
    alt: "Doctor talking with a patient in a treatment room",
  },
];

/** Medical Solutions For Every Setting: centred heading + intro, then three solution cards. */
const MedicalSolutions = () => {
  return (
    <section
      id="services"
      className="w-full bg-white pb-14 sm:pb-16 xl:pb-20 2xl:pb-24 min-[2500px]:pb-36 min-[3800px]:pb-48"
    >
      <div className="custom-container flex flex-col gap-8 xl:gap-8 2xl:gap-10 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Heading + intro */}
        <div
          className="flex flex-col items-center text-center gap-3 2xl:gap-4 min-[2500px]:gap-6 max-w-[880px] xl:max-w-[75%] mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-[#1A1A1A]">Medical Solutions For Every Setting</h2>
          <p className="text-[#4A4A4A]">
            Explore Famed Żywiec&apos;s range of medical equipment designed for operating rooms,
            hospital emergency wards, and treatment rooms. Combining functionality, reliability,
            and innovative design, our solutions support healthcare professionals in delivering
            effective patient care across diverse medical settings.
          </p>
        </div>

        {/* Cards — 1 per row on phones, 2 on small tablets, 3 from md (iPads) up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 xl:gap-7 2xl:gap-8 min-[2500px]:gap-11 min-[3800px]:gap-16">
          {solutions.map((item, i) => (
            <article
              key={item.title}
              className="group h-full flex flex-col bg-white rounded-[16px] min-[2500px]:rounded-[26px] min-[3800px]:rounded-[36px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] p-4 2xl:p-5 min-[2500px]:p-8 min-[3800px]:p-11"
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <div className="w-full aspect-[485/311] overflow-hidden rounded-[10px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[24px]">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={485}
                  height={311}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="text-[#1A1A1A] mt-5 2xl:mt-6 min-[2500px]:mt-9">{item.title}</h3>
              <p className="text-[#4A4A4A] mt-2 min-[2500px]:mt-3">{item.text}</p>

              <a
                href=""
                className="link mt-auto pt-4 2xl:pt-5 min-[2500px]:pt-8 self-start text-primary !font-semibold underline underline-offset-4 min-[2500px]:underline-offset-8 hover:text-primary-hover transition-colors"
              >
                View More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalSolutions;
