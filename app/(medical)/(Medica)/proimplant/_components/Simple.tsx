"use client";

import React from "react";
import Typography from "./Typography";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

const Simple = () => {
  return (
    <section id="simple" className="relative w-full overflow-hidden">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-[55%] xl:h-[45%] bg-primary z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[45%] xl:h-[55%] bg-white z-0"></div>

      <div className="custom-container pt-20 pb-16 min-[3800px]:pt-40 min-[3800px]:pb-32 relative z-10">

        {/* Top Text Content */}
        <div className="flex flex-col items-center text-center gap-4 min-[3800px]:gap-8 mb-12 min-[3800px]:mb-24 max-w-4xl min-[3800px]:max-w-[70%] mx-auto" data-aos="fade-up">
          <Typography variant="h2" color="white">
            Simple Treatment. Visible Confidence.
          </Typography>
          <Typography variant="p" color="white" className="leading-relaxed">
            SkinPen offers a quick, personalised treatment experience tailored to individual skin types and goals. With minimal downtime and extensive clinical validation, it provides a convenient approach to achieving healthier-looking skin.
          </Typography>
        </div>

        {/* Grid Content */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 min-[3800px]:gap-24">

          {/* Video (Left) */}
          <div className="xl:col-span-8 order-2 xl:order-1 relative aspect-video shadow-xl" data-aos="fade-right">
            <DynamicVideoPlayer type="short-1" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Content Box (Right) */}
          <div className="xl:col-span-4 order-3 xl:order-2 bg-white shadow-xl p-8 min-[3800px]:p-16 border border-gray-100 flex flex-col gap-6 min-[3800px]:gap-12" data-aos="fade-left">
            <Typography variant="h3" color="dark" className="border-b border-gray-300 pb-4 min-[3800px]:pb-8 text-[20px] min-[3800px]:text-[40px] font-bold">
              Clinical Performance
            </Typography>

            <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-2xl leading-relaxed">
              Designed to support efficient urinary drainage while providing practical sizing options for a variety of clinical applications.
            </Typography>

            <ul className="flex flex-col gap-4 min-[3800px]:gap-8 mt-2 flex-1">
              <li className="flex gap-3 min-[3800px]:gap-6">
                <div className="shrink-0 mt-0.5 min-[3800px]:mt-2">
                  <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                  </svg>
                </div>
                <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-2xl leading-relaxed">
                  Colour-Coded Sizes -  Distinct colour coding helps healthcare professionals quickly identify the required catheter size during clinical use.
                </Typography>
              </li>
              <li className="flex gap-3 min-[3800px]:gap-6">
                <div className="shrink-0 mt-0.5 min-[3800px]:mt-2">
                  <svg className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10" viewBox="0 0 24 24" fill="var(--color-primary)" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                  </svg>
                </div>
                <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-2xl leading-relaxed">
                  Consistent Drainage -  The catheter's smooth, flexible design supports effective urine drainage and reliable day-to-day clinical handling.
                </Typography>
              </li>
            </ul>

            <Typography variant="p" color="muted" className="text-sm min-[3800px]:text-2xl leading-relaxed border-t border-gray-300 pt-6 min-[3800px]:pt-10 mt-2">
              It ensures reliable performance, convenient handling, and consistent functionality across different healthcare environments and patient care requirements.
            </Typography>

            <div className="mt-2 min-[3800px]:mt-6">
              <Button text="View Product Details" href="#products" variant="primary" showIcon={true} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Simple;
