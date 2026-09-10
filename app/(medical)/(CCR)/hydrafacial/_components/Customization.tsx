"use client";

import React from "react";
import Typography from "./Typography";

const steps = [
  { image: "/medical/hydrafacial/c1.png", title: "Lymphatic Drainage", body: "Creates a more sculpted lifted appearance." },
  { image: "/medical/hydrafacial/c2.png", title: "Microdermabrasion", body: "A crystal-free tip for smoother, brighter skin." },
  { image: "/medical/hydrafacial/c3.png", title: "Peel", body: "Pain-free, customisable and no downtime." },
  { image: "/medical/hydrafacial/c4.png", title: "Extract", body: "Cleanses pores without discomfort or redness." },
  { image: "/medical/hydrafacial/c5.png", title: "Booster", body: "Fully customised to target your skin's needs." },
  { image: "/medical/hydrafacial/c6.png", title: "LED", body: "Red and blue light to firm and clarify skin." },
  { image: "/medical/hydrafacial/c7.png", title: "Hydrate", body: "Nourishing serums restore glow." },
];

const Customization = () => {
  return (
    <section id="customization" className="w-full py-16 lg:py-24 bg-white overflow-hidden relative">

      {/* Decorative water splash background - positioned outside container to bleed to screen edge */}
      <img
        src="/medical/hydrafacial/bg2.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-0 w-[350px] lg:w-[450px] 2xl:w-[550px] max-w-none hidden lg:block opacity-90 z-0"
      />

      <div className="custom-container relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6 order-1 lg:col-span-4 w-full" data-aos="fade-right">
          <div className="flex flex-col gap-1">
            <Typography variant="h2" color="dark" weight="bold">
              One Device,
            </Typography>
            <Typography variant="h2" color="dark" weight="bold">
              Seven Steps,
            </Typography>
            <Typography variant="h2" color="primary" weight="bold">
              Complete Client Customization
            </Typography>
          </div>

          <Typography variant="p" color="muted" className="leading-relaxed text-sm sm:text-base">
            Each step works together to cleanse, exfoliate, extract and infuse - delivering a personalised treatment experience for healthier, more radiant skin.
          </Typography>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 order-2 lg:col-span-8 w-full" data-aos="fade-left">
          {steps.map(({ image, title, body }, index) => (
            <div
              key={title}
              className={`flex flex-col bg-white border border-gray-200 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden col-span-1 md:col-span-2 lg:col-span-2 ${index === 4 ? 'lg:col-start-2' : ''}`}
            >
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3 p-4 sm:p-5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 shrink-0 rounded-full border border-primary bg-[#147BD133] text-[#147BD1] flex items-center justify-center">
                  <Typography variant="span" className="text-xs sm:text-sm text-[#147BD1] font-bold">
                    {index + 1}
                  </Typography>
                </div>
                <div className="flex flex-col gap-1">
                  <Typography variant="h4" color="primary" weight="bold" className="text-sm sm:text-base">
                    {title}
                  </Typography>
                  <Typography variant="p" className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                    {body}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customization;
