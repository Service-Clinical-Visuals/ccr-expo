"use client";

import React from "react";
import DynamicVideoPlayer from "@/app/_components/DynamicVideoPlayer";
import Button from "./Button";

export default function Banner() {
  const scrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="w-full relative z-10 h-screen h-[100dvh] min-h-0 max-h-[100dvh] flex flex-col pt-[84px] sm:pt-[92px] md:pt-[100px] pb-3 lg:pt-[108px] overflow-hidden"
    >
      <div className="custom-container mx-auto min-[2000px]:max-w-[1700px] min-[2500px]:max-w-[1900px] min-[3000px]:max-w-[2200px] min-[3840px]:max-w-[2600px] transition-all flex-1 min-h-0 h-full flex flex-col">
        {/* Large Rounded Hero Banner Card */}
        <div
          className="
            relative w-full flex-1 min-h-0 h-full rounded-[20px] sm:rounded-[30px] min-[2000px]:rounded-[40px] min-[3000px]:rounded-[50px] overflow-hidden
            flex flex-col justify-end
            p-6 sm:p-10 md:p-14 lg:p-16 xl:p-20 min-[2000px]:p-28 min-[3000px]:p-36
          "
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          {/* Background Video using "short-3" as instructed */}
          <div className="absolute inset-0 z-0 bg-[#0d160b]">
            <DynamicVideoPlayer
              type="banner"
              className="absolute inset-0 w-full h-full object-cover aspect-video"
            />
          </div>

          {/* Banner Content (Heading & CTA) */}
          <div
            className="relative z-10 flex flex-col items-start gap-4 sm:gap-6 min-[2000px]:gap-10 min-[3000px]:gap-14 max-w-[747px] min-[2000px]:max-w-[1000px] min-[3000px]:max-w-[1300px]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            <h1
              className="!text-white text-white font-orbitron font-semibold text-[32px] sm:text-[40px] md:text-[50px] min-[2000px]:text-[65px] min-[3000px]:text-[80px] leading-[1.3] capitalize drop-shadow-md"
              style={{ color: "#ffffff" }}
            >
              Working For Patient Comfort In<br />Trauma And Spine Solutions
            </h1>

            <div className="pt-1">
              <Button
                text="Explore Our Story"
                bgColor="#DBA018"
                textColor="#ffffff"
                onClick={scrollToProducts}
                className="h-[43px] min-[2000px]:h-[60px] min-[3000px]:h-[75px] px-5 sm:px-6 min-[2000px]:px-8 min-[3000px]:px-12 py-2.5 min-[2000px]:py-4 min-[3000px]:py-6 !text-[18px] min-[2000px]:!text-[24px] min-[3000px]:!text-[30px] font-semibold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
