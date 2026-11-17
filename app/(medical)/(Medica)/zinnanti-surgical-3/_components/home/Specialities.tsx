"use client";

import React from "react";
import Typography from "../Typography";
import Button from "../Button";

interface SpecialityCard {
  number: string;
  title: string;
  description: string;
  image: string;
}

const specialitiesData: SpecialityCard[] = [
  {
    number: "01",
    title: "Dermatology",
    description:
      "Advanced smoke evacuation solutions designed to support clear visibility and a cleaner environment during HRA procedures.",
    image: "/medical/zinnanti-surgical-3/s1.webp",
  },
  {
    number: "02",
    title: "Gynecology",
    description:
      "Reliable smoke evacuation solutions designed to support improved visibility and a controlled environment during gynecological procedures.",
    image: "/medical/zinnanti-surgical-3/s2.webp",
  },
  {
    number: "03",
    title: "High Res Anoscopy",
    description:
      "Advanced smoke evacuation solutions designed to support clear visibility and a cleaner environment during HRA procedures.",
    image: "/medical/zinnanti-surgical-3/s3.webp",
  },
];

/**
 * Specialities Section (s1, s2, s3) - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 * - Number size: 72px (4.5rem) scaled via .number class
 * - Full-width card buttons covering each card's inner width
 * - Odd cards centered on 2-column tablet view (768px - 1035px)
 */
const Specialities = () => {
  return (
    <section
      id="specialities"
      className="w-full py-16 xl:py-24 bg-[#00578E] bg-[url('/medical/zinnanti-surgical-3/bg.webp')] bg-cover bg-center bg-no-repeat overflow-hidden relative text-white"
    >
      <div className="custom-container flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Section Header: Centered */}
        <div
          className="text-center w-full max-w-full xl:max-w-[70%] mx-auto space-y-4"
          data-aos="fade-up"
        >
          <div className="flex items-center justify-center gap-2.5">
            <span className="w-8 h-1 bg-white rounded-full inline-block" />
            <span className="heading-blue text-white">
              Our Specialities
            </span>
          </div>

          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl lg:text-4xl min-[2500px]:text-5xl min-[3800px]:text-7xl font-bold tracking-tight"
          >
            Advanced Surgical Solutions Across Multiple Medical Specialties
          </Typography>
        </div>

        {/* 3 Speciality Cards: 3 in a single row on desktop, 2-col with centered 3rd card on tablet */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1036px]:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {specialitiesData.map((item, idx) => (
            <div
              key={item.number}
              className={`w-full bg-white text-[#333333] rounded-[16px] min-[3800px]:rounded-[32px] p-6 sm:p-7 min-[2500px]:p-10 min-[3800px]:p-14 shadow-[0px_20px_30px_-10px_#142538] flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                idx === 2
                  ? "md:col-span-2 md:w-full md:max-w-[calc(50%-1rem)] md:mx-auto lg:col-span-1 lg:max-w-none lg:mx-0 min-[1036px]:col-span-1 min-[1036px]:max-w-none min-[1036px]:mx-0"
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <div>
                {/* Header row: Title & 72px rem-scaled number */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl min-[2500px]:text-3xl min-[3800px]:text-5xl font-semibold text-[#333333] font-['Outfit'] mt-1">
                    {item.title}
                  </h3>
                  <span className="number font-semibold text-[#DBDBDB] leading-none select-none">
                    {item.number}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#555555] leading-relaxed text-justify mt-3 mb-6">
                  {item.description}
                </p>

                {/* Card Image */}
                <div className="w-full aspect-[16/10] rounded-[16px] min-[3800px]:rounded-[28px] overflow-hidden mb-6 bg-gray-100 group-hover:scale-[1.02] transition-transform duration-500 ease-out">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Action Button: Full width covering card width */}
              <div className="w-full pt-2">
                <Button
                  text="View Products"
                  variant="card"
                  href="#contact"
                  className="w-full justify-between"
                  circleBg="bg-white"
                  arrowColor="text-[#000000]"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Specialities;
