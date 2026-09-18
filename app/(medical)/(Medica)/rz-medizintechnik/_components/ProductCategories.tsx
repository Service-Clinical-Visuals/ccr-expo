"use client";

import React from "react";
import Link from "next/link";
import Typography from "./Typography";

export default function ProductCategories() {
  // Correct image mapping matching Figma prototype:
  // 1. Urology -> p3.png (scope with angled eyepiece in center)
  // 2. Gynaecology -> p2.png (horizontal scopes with red ring)
  // 3. Laparoscopy -> p1.png (instruments with scissors at top left)
  // 4. Arthroscopy -> p4.png (instruments with ring handles & yellow component)
  const categories = [
    {
      title: "Urology",
      image: "/medical/rz-medizintechnik/p3.png",
      href: "#products",
    },
    {
      title: "Gynaecology",
      image: "/medical/rz-medizintechnik/p2.png",
      href: "#products",
    },
    {
      title: "Laparoscopy",
      image: "/medical/rz-medizintechnik/p1.png",
      href: "#products",
    },
    {
      title: "Arthroscopy",
      image: "/medical/rz-medizintechnik/p4.png",
      href: "#products",
    },
  ];

  return (
    <section
      id="categories"
      className="w-full bg-white py-16 sm:py-20 lg:py-28 xl:py-32 2xl:py-36 min-[1920px]:py-40 min-[2500px]:py-52 min-[3800px]:py-64 overflow-hidden"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Section Header with 70% responsive width matching Deleo */}
        <div
          className="xl:max-w-[70%] max-w-[90%] mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-5 min-[2500px]:space-y-8 min-[3800px]:space-y-12 mb-12 sm:mb-14 lg:mb-16 min-[1920px]:mb-20 min-[2500px]:mb-28 min-[3800px]:mb-40"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {/* Main Title */}
          <Typography
            variant="h2"
            color="dark"
            className="font-semibold leading-tight tracking-tight text-center"
          >
            Medical Technology Designed for Modern Surgery
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="p"
            color="secondary"
            className="leading-relaxed text-center"
          >
            From precision instruments to advanced visualization systems, RZ
            Medizintechnik offers a comprehensive portfolio designed to support
            healthcare professionals across a wide range of surgical
            specialties.
          </Typography>
        </div>

        {/* Responsive Cards Grid:
            - Mobile: 1 column (h-[320px])
            - Tablet: 2x2 grid (sm:grid-cols-2, h-[400px])
            - Desktop: 4 cards in 1 row (xl:grid-cols-4, h-[540px] - h-[600px])
            - Wide / 2K / 4K: Generously tall cards (h-[680px], h-[960px], h-[1380px])
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 xl:gap-7 2xl:gap-8 min-[2500px]:gap-12 min-[3800px]:gap-16 w-full">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="group relative h-[320px] sm:h-[400px] md:h-[420px] lg:h-[460px] xl:h-[540px] 2xl:h-[600px] min-[1920px]:h-[680px] min-[2500px]:h-[960px] min-[3800px]:h-[1380px] rounded-[16px] xl:rounded-[20px] min-[2500px]:rounded-[28px] min-[3800px]:rounded-[40px] overflow-hidden shadow-[0px_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 bg-[#EFEFEF] flex flex-col justify-end p-3.5 sm:p-4 lg:p-5 xl:p-6 min-[2500px]:p-9 min-[3800px]:p-12"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              data-aos-duration="800"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Glassmorphism Overlay Card */}
              <div className="relative z-10 w-full max-w-[92%] sm:max-w-[90%] mx-auto rounded-[12px] sm:rounded-[16px] min-[2500px]:rounded-[24px] min-[3800px]:rounded-[32px] bg-black/30 backdrop-blur-md border border-white/25 p-3.5 sm:p-4 lg:p-5 min-[2500px]:p-8 min-[3800px]:p-12 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 lg:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9 transition-all duration-300 group-hover:bg-black/40 group-hover:border-white/35 shadow-md mb-2 sm:mb-3 min-[2500px]:mb-5 min-[3800px]:mb-8">
                <h3 className="font-primary font-semibold text-white text-[16px] sm:text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px] min-[2500px]:text-[24px] min-[3800px]:text-[28px] leading-tight drop-shadow-sm">
                  {cat.title}
                </h3>

                <Link
                  href={cat.href}
                  className="w-auto px-4 sm:px-5 lg:px-6 min-[2500px]:px-10 min-[3800px]:px-14 h-[34px] sm:h-[38px] lg:h-[40px] xl:h-[42px] min-[2500px]:h-[52px] min-[3800px]:h-[64px] bg-[#0099A1] hover:bg-[#00828a] text-white rounded-[6px] sm:rounded-[8px] min-[2500px]:rounded-[14px] min-[3800px]:rounded-[18px] font-semibold text-[13px] sm:text-[13.5px] lg:text-[14px] xl:text-[14.5px] min-[2500px]:text-[17px] min-[3800px]:text-[20px] transition-colors flex items-center justify-center text-center shadow-sm active:scale-[0.98] whitespace-nowrap"
                >
                  View Products
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Categories Link */}
        <div
          className="w-full flex justify-end mt-8 sm:mt-10 min-[1920px]:mt-14 min-[2500px]:mt-18 min-[3800px]:mt-24"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <Link
            href="#products"
            className="font-primary font-normal text-[15px] xl:text-[15px] min-[2500px]:text-[18px] min-[3800px]:text-[22px] leading-[26px] underline text-[#0099A1] hover:text-[#00828a] transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}

