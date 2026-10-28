"use client";

import React from "react";
import { LuAxis3D, LuEye, LuMonitor } from "react-icons/lu";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Typography from "./Typography";
import Button from "./Button";

const features = [
  { title: "Integrated Ultrasound Technology", Icon: LuMonitor },
  { title: "Mobility & Cart Design", Icon: LuAxis3D },
  { title: "Attention to Detail", Icon: LuEye },
];

export default function Interactive360() {
  return (
    <section
      id="experience-360"
      className="w-full bg-[#E9F8FF] bg-[url('/(WHX-Dubai-2027)/deepsight/bg.webp')] bg-cover bg-bottom bg-no-repeat py-12 sm:py-16 lg:py-[70px] 2xl:py-[70px] min-[2500px]:py-28 min-[3800px]:py-40 overflow-hidden"
    >
      <div className="custom-container grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8 min-[2500px]:gap-14 min-[3800px]:gap-20">
        {/* Content (first on mobile/tablet) */}
        <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-start" data-aos="fade-left">
          <div className="flex items-center gap-1.5 min-[2500px]:gap-2.5 min-[3800px]:gap-3.5 mb-3 min-[2500px]:mb-5 min-[3800px]:mb-7">
            <span className="block w-1.5 h-1.5 min-[2500px]:w-2.5 min-[2500px]:h-2.5 min-[3800px]:w-3 min-[3800px]:h-3 rounded-full bg-secondary" />
            <Typography variant="h6" color="secondary" className="uppercase">
              Explore Every Angle
            </Typography>
          </div>

          <Typography variant="h2" color="primary" className="mb-4 min-[2500px]:mb-7 min-[3800px]:mb-10">
            Discover NeedleVue Lite in 360°
          </Typography>

          <Typography variant="p" color="primary">
            Explore the NeedleVue Lite Cart through an immersive 360° experience that reveals its design, integrated
            ultrasound technology, and thoughtfully engineered features. Rotate the view to discover the cart from
            every perspective and see how its mobility, functional design, and technology come together to support
            ultrasound-guided procedures. Take a closer look at the display, cart structure, and key components that
            define its overall configuration. Discover the details behind its design and gain a comprehensive
            understanding of the system before exploring its capabilities further.
          </Typography>

          <div className="w-full grid grid-cols-3 gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-10 mt-6 min-[2500px]:mt-10 min-[3800px]:mt-14">
            {features.map(({ title, Icon }) => (
              <div key={title} className="flex flex-col items-center text-center gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5">
                <Icon className="w-8 h-8 min-[2500px]:w-9 min-[2500px]:h-9 min-[3800px]:w-12 min-[3800px]:h-12 text-secondary" strokeWidth={1.5} />
                <Typography variant="h5" color="primary">
                  {title}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-7 min-[2500px]:mt-11 min-[3800px]:mt-14">
            <Button text="Explore Product" variant="primary" href="#products" />
          </div>
        </div>

        {/* 360° video */}
        <div
          className="order-2 lg:order-1 lg:col-span-7 relative w-full aspect-video lg:aspect-[847/477] overflow-hidden bg-[#EBEBEB]"
          data-aos="fade-right"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
