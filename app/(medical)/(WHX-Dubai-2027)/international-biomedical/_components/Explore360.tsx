"use client";

import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";

export default function Explore360() {
  return (
    <section
      id="explore-360"
      className="relative w-full bg-primary overflow-hidden py-12 sm:py-14 xl:py-16 2xl:py-20 min-[2500px]:py-28 min-[3800px]:py-40"
    >
      <div className="custom-container flex flex-col items-center">
        {/* Heading + intro */}
        <div
          className="w-full max-w-[880px] 2xl:max-w-[1000px] min-[2500px]:max-w-[1500px] min-[3800px]:max-w-[2100px] text-center flex flex-col items-center gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-9 mb-8 sm:mb-10 xl:mb-12 min-[2500px]:mb-16 min-[3800px]:mb-24"
          data-aos="fade-up"
        >
          <h2 className="!text-white">Explore AeroNOx 2.0 In 360°</h2>
          <p className="text-white">
            Discover the International Biomedical AeroNOx 2.0 Nitric Oxide Delivery System through
            an immersive 360° product experience. Explore its compact design, intuitive controls,
            real-time monitoring capabilities, and advanced safety features, developed to support
            nitric oxide therapy for newborns and infants in bedside and transport environments.
          </p>
        </div>

        {/* 360° video */}
        <div
          className="relative w-full xl:w-[80%] aspect-video  overflow-hidden bg-[#EBEBEB] rounded-tl-2xl rounded-br-2xl sm:rounded-tl-3xl sm:rounded-br-3xl min-[2500px]:rounded-tl-[40px] min-[2500px]:rounded-br-[40px] min-[3800px]:rounded-tl-[56px] min-[3800px]:rounded-br-[56px]"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <DynamicVideoPlayer type="360" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
